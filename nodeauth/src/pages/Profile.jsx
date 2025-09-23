import {
  Form,
  Link,
  useNavigate,
  useNavigation,
  redirect,
  useLoaderData,
} from "react-router-dom";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const action = async () => {
  await customFetch.get("/auth/logout");
  toast.success("Logging out...");
  return redirect("/");
};

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const Profile = () => {
  const { user } = useLoaderData();
  // console.log(data);
  return (
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome back, {user.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>
        <Form method="post">
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
