import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Layout} from "./pages/Layout";
import {ContactUsPage} from "./pages/ContactUsPage";
import {StorePage} from "./pages/StorePage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ProfilePage} from "./pages/user/ProfilePage";
import {UserLayout} from "./pages/user/UserLayout";
import {SignInPage} from "./pages/SignInPage";
import {SignUpPage} from "./pages/SignUpPage";
import {AdminLayout} from "./pages/admin/AdminLayout";
import {DashboardPage} from "./pages/admin/DashboardPage";
import {CartPage} from "./pages/CartPage";
import {ProductDetailPage} from "./pages/ProductDetailPage";
import {ProductsPage} from "./pages/admin/ProductsPage";
import {CategoryPage} from "./pages/admin/CategoryPage";
import {SubCategoryPage} from "./pages/admin/SubCategoryPage";
import {ReclamationPage} from "./pages/admin/ReclamationPage";
import {ClientPage} from "./pages/admin/ClientPage";
import {OrdersPage} from "./pages/user/OrdersPage";
import {ClientOrdersPage} from "./pages/admin/ClientOrdersPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/* Visitor Routes */}
                    <Route index element={<HomePage/>}/>
                    <Route path='store' element={<StorePage/>}/>
                    <Route path='product/:productId' element={<ProductDetailPage/>}/>
                    <Route path='contact-us' element={<ContactUsPage/>}/>
                    <Route path='sign-in' element={<SignInPage/>}/>
                    <Route path='sign-up' element={<SignUpPage/>}/>
                    <Route path='cart' element={<CartPage/>}/>
                    {/* Not Found Page Route (Any undefined route will redirect here) */}
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
                {/* User Routes */}
                <Route path={`/user`} element={<UserLayout/>}>
                    <Route index element={<ProfilePage/>}/>
                    <Route path=":userId/orders" element={<OrdersPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
                {/* Admin Routes */}
                <Route path={`/admin`} element={<AdminLayout/>}>
                    <Route index element={<DashboardPage/>}/>
                    <Route path="products" element={<ProductsPage/>}/>
                    <Route path="category" element={<CategoryPage/>}/>
                    <Route path="sub-category" element={<SubCategoryPage/>}/>
                    <Route path="reclamations" element={<ReclamationPage/>}/>
                    <Route path="clients" element={<ClientPage/>}/>
                    <Route path="orders" element={<ClientOrdersPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
