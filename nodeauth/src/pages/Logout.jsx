import {
  Form,
  Link,
  useNavigate,
  useNavigation,
  redirect,
} from "react-router-dom";
import customFetch from "../../../utils/customFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const action = async () => {
  const navigate = useNavigate();
  navigate("/");
  await customFetch.get("/auth/logout");
  toast.success("Logging out...");
};

export default function Logout() {
  const nav = useNavigation();
  const busy = nav.state === "submitting";

  return (
    <Form method="post">
      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {busy ? "Logging out..." : "Logout"}
      </button>
    </Form>
  );
}
