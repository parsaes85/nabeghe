import axios from "axios";
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

async function canRegister(email) {
  try {
    const { data } = await axios.get(`${baseUrl}/users?email=${email}`);

    return data.length ? false : true;
  } catch (error) {
    return false;
  }
}

async function register(data, router, setIsLoaderPending) {
  try {
    if (await canRegister(data.email)) {
      const res = await axios.post(`${baseUrl}/users`, {
        ...data,
        role: "student",
        token: crypto.randomUUID(),
      });
      setCookie("nabeghe-token", res.data.token, {
        secure: true,
        "max-age": 3600 * 24,
      });
      router.push("/");
      setIsLoaderPending(false);
      return res;
    } else {
      Toast.fire({
        icon: "error",
        title: "کاربری با این ایمیل قبلا ثبت نام کرده است",
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

export default register;
