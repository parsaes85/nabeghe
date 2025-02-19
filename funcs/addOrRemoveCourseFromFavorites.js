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

async function isCourseInFavorites(courseId) {
  const { data } = await axios.get(`${baseUrl}/usersFavoriteCourses`);
  const isCourseInFavoritesResult = await data.find(
    (course) =>
      course.userToken == getCookie("nabeghe-token") &&
      course.course.id == courseId
  );

  return isCourseInFavoritesResult;
}

async function addOrRemoveCourseFromFavorites(data) {
  try {
    if (!getCookie("nabeghe-token")) {
      Toast.fire({
        icon: "error",
        title: "ابتدا وارد حساب خود شوید",
      });
      return false;
    }
    if (await isCourseInFavorites(data.id)) {
      const res = await axios.delete(`${baseUrl}/usersFavoriteCourses/${(await isCourseInFavorites(data.id)).id}`);
      await Toast.fire({
        icon: "success",
        title: "دوره از علاقه‌مندی ها حذف شد",
      });
      return false;
    }
    const res = await axios.post(`${baseUrl}/usersFavoriteCourses`, {
      course: data,
      userToken: getCookie("nabeghe-token"),
    });
    await Toast.fire({
      icon: "success",
      title: "دوره به علاقه‌مندی ها اضاف شد",
    });
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "اضافه به علاقه‌مندی ها با خطا مواجه شد. دوباره تلاش کنید",
    });
  }
}

export { addOrRemoveCourseFromFavorites, isCourseInFavorites };
