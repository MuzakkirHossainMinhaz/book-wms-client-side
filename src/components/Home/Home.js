import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SuplierLists from './SuplierLists/SuplierLists';
import Items from './Items/Items';
import ManageInventories from './ManageInventories/ManageInventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <ManageInventories></ManageInventories>
            <Category></Category>
            <SuplierLists></SuplierLists>
            <Footer></Footer>
        </div>
    );
};

export default Home;