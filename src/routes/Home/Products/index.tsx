import { Outlet } from "react-router-dom";
import HeaderProduct from "../../../components/HeaderProduct";

export default function Products() {
    return (
        <>
            <HeaderProduct />
            <Outlet />
        </>
    )
}