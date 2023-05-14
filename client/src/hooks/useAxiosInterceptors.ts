import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";

const useAxiosInterceptors = () => {
  const snack = useSnack();
  //   axios.interceptors.request.use(
  //     requestObject => {
  //       console.log("in useAxiosInterceptors resolve");
  //       // console.log(requestObject);
  //       //   requestObject.user = "david";
  //       //   if (!requestObject.user) throw new Error("This is David Yakin Error!!!!");
  //       return Promise.resolve(requestObject);
  //     },
  //     error => {
  //       console.log("in useAxiosInterceptors error");
  //       console.log(error);
  //       return Promise.reject(error);
  //     }
  //   );

  axios.interceptors.request.use(data => Promise.resolve(data), null);

  axios.interceptors.response.use(null, (error: any) => {
    const expectedError = error.response && error.response.status >= 400;
    if (expectedError) snack("error", error.message);
    return Promise.reject(error);
  });
};

export default useAxiosInterceptors;
