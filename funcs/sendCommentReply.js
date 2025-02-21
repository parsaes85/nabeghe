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

async function sendCommentReply(
  getCourseCommentsHandler,
  commentReplyText,
  isCommentReply
) {
  try {
    const userInfos = await getMe();
    if (!userInfos) {
      Toast.fire({
        icon: "error",
        title: "ابتدا وارد حساب خود شوید",
      });
      return false;
    }
    if (!commentReplyText.trim()) {
      Toast.fire({
        icon: "error",
        title: "متن مورد نظر خود را وارد کنید",
      });
      return false;
    }
    const { data } = await axios.put(
      `${baseUrl}/coursesComments/${isCommentReply.id}`,
      {
        userId: isCommentReply.userId,
        username: isCommentReply.username,
        courseId: isCommentReply.courseId,
        comment: isCommentReply.comment,
        createdAt: isCommentReply.createdAt,
        answers: [
          ...isCommentReply.answers,
          {
            username: userInfos.username,
            commentId: isCommentReply.id,
            answer: commentReplyText,
            createdAt: "",
            likes: 0,
          },
        ],
        likes: isCommentReply.likes,
        id: isCommentReply.id,
      }
    );
    // console.log(isCommentReply);
    // console.log({
    //   userId: isCommentReply.userId,
    //   username: isCommentReply.username,
    //   courseId: isCommentReply.courseId,
    //   comment: isCommentReply.comment,
    //   createdAt: isCommentReply.createdAt,
    //   answers: [
    //     ...isCommentReply.answers,
    //     {
    //       username: userInfos.username,
    //       commentId: isCommentReply.id,
    //       answer: commentReplyText,
    //       createdAt: "",
    //       likes: 0,
    //     },
    //   ],
    //   likes: isCommentReply.likes,
    //   id: isCommentReply.id,
    // });
    Toast.fire({
      icon: "success",
      title: "کامنت با موفقیت ارسال شد",
    });
    await getCourseCommentsHandler();
  } catch (error) {}
}

export default sendCommentReply;
