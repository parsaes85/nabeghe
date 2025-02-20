import axios from "axios";
import { baseUrl } from "@/data/variables";
import getMe from "./getMe";
import Swal from "sweetalert2";

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

async function sendComment(getCourseCommentsHandler, courseId, commentText) {
  try {
    const userInfos = await getMe();
    if (!userInfos) {
      Toast.fire({
        icon: "error",
        title: "ابتدا وارد حساب خود شوید",
      });
      return false;
    }
    if (!commentText.trim()) {
      Toast.fire({
        icon: "error",
        title: "متن مورد نظر خود را وارد کنید",
      });
      return false;
    }
    const { data } = await axios.post(`${baseUrl}/coursesComments`, {
      userId: userInfos.id,
      username: userInfos.username,
      courseId,
      comment: commentText,
      createdAt: "",
      answers: [],
      likes: 0,
    });
    Toast.fire({
      icon: "success",
      title: "کامنت با موفقیت ارسال شد",
    });
    await getCourseCommentsHandler();
  } catch (error) {}
}

export default sendComment;
