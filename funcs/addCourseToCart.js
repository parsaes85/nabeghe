import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "@/data/variables";
import getCookie from "./cookies/getCookie";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

async function isCourseInCart(courseId) {
  const { data } = await axios.get(`${baseUrl}/usersCartCourses`);
  const isCourseInCartResult = await data.some(
    (course) =>
      course.userToken == getCookie("nabeghe-token") &&
      course.course.id == courseId
  );

  return isCourseInCartResult;
}

async function addCourseToCart(data) {
  try {
    if (!getCookie("nabeghe-token")) {
      Toast.fire({
        icon: "error",
        title: "ابتدا وارد حساب خود شوید",
      });
      return false;
    }
    if (await isCourseInCart(data.id)) {
      Toast.fire({
        icon: "warning",
        title: "این دوره در سبد شما موجود است",
      });
      return false;
    }
    const res = await axios.post(`${baseUrl}/usersCartCourses`, {
      course: data,
      userToken: getCookie("nabeghe-token"),
    });
    await Toast.fire({
      icon: "success",
      title: "دوره با موفقیت به سبد اضاف شد",
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "اضافه به سبد با خطا مواجه شد. دوباره تلاش کنید",
    });
  }
}

export default addCourseToCart;
