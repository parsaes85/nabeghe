import { baseUrl } from "@/data/variables";
import setCookie from "./cookies/setCookie";
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

async function login(data, router, setIsLoaderPending) {
  try {
    const res = await fetch(
      `${baseUrl}/users?email=${data.email}&password=${data.password}`
    );
    const resData = await res.json();

    if (resData.length) {
      setCookie("nabeghe-token", resData[0].token, {
        secure: true,
        "max-age": 3600 * 24,
      });
      router.push("/");
      setIsLoaderPending(false);
    } else {
      Toast.fire({
        icon: "error",
        title: "ایمیل یا رمز عبور اشتباه است",
      });
      setIsLoaderPending(false);
    }
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "خطایی رخ داده است. لطفا دوباره تلاش کنید",
    });
    setIsLoaderPending(false);
  }
}

export default login;
