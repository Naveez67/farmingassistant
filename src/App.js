//import logo from './logo.svg';
import "./App.css";
import '../node_modules/react-vis/dist/style.css';
import MyNavbar from "./navbar/navbar";
import Showblog from "./Modules/admin/blog/showblog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Crops from "./components/crops/crops";
import Detials from "./components/all/detialpage";
import Vegitables from "./components/vegitables/vegetables";
import Allcrops from "./components/all/all";
import Ornamentals from "./components/ornamentals/ornamentals";
import Medicinal from "./components/medicinal/medicinal";
import Fruits from "./components/fruits/fruits";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "react-use-cart";
import Blog from "./Modules/admin/blog/blog";
import Readblog from "./Modules/admin/blog/readblog";
import Updateblog from "./Modules/admin/blog/updateblog";
// import Login from "./Modules/auth/Login";
import Shownews from './Modules/admin/news/shownews'
import News from './Modules/admin/news/news';
import Updatenews from './Modules/admin/news/updatenews';
import Readnews from './Modules/admin/news/readnews';
import Customers from "./Modules/admin/userslist/getcustomers";
import Farmers from "./Modules/admin/userslist/getfarmers";
import Updateuser from "./Modules/admin/userslist/updateuser";
import Getusers from "./Modules/admin/userslist/getusers";
import Suppliers from "./Modules/admin/userslist/getsuppliers";
// import Register from "./Modules/auth/Register";
import Todayweather from "./weather/todayweather";
import Helppost from "./pages/help/help";
import Showallpost from "./pages/help/showallpost";
import Cardnotification from "./pages/notification/complaintcard";
import Accounts from "./pages/notification/accounts";
import Acountdata from "./pages/notification/accountdata";
import Complain from "./pages/complain/complain";
import Notification from "./pages/notification/notification";
// import Profile from "./pages/profile/profile";
// import Profileupdate from "./pages/profile/updateprofile";
import Marketrates from "./Modules/admin/rates/marketrates";
import Showrates from "./Modules/admin/rates/showrates";
import Newagrioffice from "./Modules/admin/offices/newagrioffice";
import Showoffices from "./Modules/admin/offices/showoffices";
import Editagrioffice from "./Modules/admin/offices/editoffice";
// import Myads from "./pages/profile/profilemenu/myads";
// import Myposts from "./pages/profile/profilemenu/mypost";
import Myprofile from "./pages/profile/profilemenu/myprofile";
import Home from "./pages/homepage/home";
import UpdateMarketrates from "./Modules/admin/rates/updaterates";
// import Showads from "./Modules/Ads/showads";
import Postad from "./Modules/Ads/postad";
import Fullad from "./Modules/Ads/fulldetials";
import Login from "./Modules/auth/login/login";
import Register from "./Modules/auth/register/register";
// import Adslandinpage from "./Modules/Ads/adssection/mainpage";
import Displayads from "./Modules/Ads/adssection/displayads";
import Mycart from './Modules/Ads/cart';
import Orderform from "./Modules/Ads/ordersection/orderform";
// import Demo from "./navbar/demo/demo";
import Multiorder from "./Modules/Ads/ordersection/multiorder";
import Aboutus from "./AboutUs/about";
import NewNavbar from "./ContactFrom/newnavbar/NewNavbar";
import Forgetpassword from './Modules/auth/forgetpassword/forgetpas'
import Newpasswordscreen from "./Modules/auth/forgetpassword/newpassword";
import Navbar from "./ContactFrom/newnavbar/NewNavbar";
function App() {
  return ( 
    <div className="App">  
      
      <BrowserRouter>
        <ToastContainer />
        <CartProvider>

        <Switch>
                   <Route exact path="/login" component={LoginContainer}/>
                   <Route exact path="/forgetpassword" >
                     <Forgetpassword />
                   </Route>
                   <Route exact path="/newpassword/:username" >
                     <Newpasswordscreen />
                   </Route>
                   {/* <Route exact path="/showprofile">
                            <Myprofile />
                   </Route> */}
                   <Route path="/register">
                       <Register  />
                    </Route>
                    <Route component={DefaultContainer}/>

         </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
const LoginContainer = () => (
  <div >
    <Route path="/login">
            <Login />
     </Route>
  </div>
);
const DefaultContainer = () => (
<div>
     {window.location.pathname === '/login'  ? null : <Navbar />}
     <Switch>
     <Route path="/crops">
              <Crops />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detials/:name">
              <Detials />
            </Route>
            <Route path="/vegitable">
              <Vegitables />
            </Route>
            <Route path="/all">
              <Allcrops />
            </Route>
            <Route path="/ornamentals">
              <Ornamentals />
            </Route>
            <Route path="/medicinal">
              <Medicinal />
            </Route>
            <Route path="/fruits">
              <Fruits />
            </Route>
            <Route path="/addblog">
            <Blog />
          </Route>
          <Route path="/showblog">
            <Showblog />
          </Route>
          <Route path="/readblog/:id">
            <Readblog />
          </Route>
          <Route path="/updateblog/:id">
            <Updateblog />
          </Route>
          <Route exact path="/news">
            <Shownews />
          </Route>
          <Route exact path="/addnews">
            <News />
          </Route>
          <Route exact path="/news/readnews/:id">
            <Readnews />
          </Route>
          <Route exact path="/news/updatenews/:id">
            <Updatenews /> 
          </Route>
          <Route path="/showusers">
            <Getusers />
          </Route>
          <Route path="/updateuser/:id">
            <Updateuser />
          </Route>
          <Route path="/showfarmers">
            <Farmers />
          </Route>
          <Route path="/showcustomers">
            <Customers />
          </Route>
          <Route path="/showsuppliers">
            <Suppliers />
          </Route>
          <Route path="/ads">
            <Displayads />
            {/* <Adslandinpage /> */}
            {/* <Showads /> */}
          </Route>
          <Route path="/mycart">
            <Mycart />
          </Route>
          <Route path="/placeorder/:id/:q">
            <Orderform />
          </Route>
          <Route path="/order">
            <Multiorder />
          </Route>
          <Route path="/ad/:id">
            <Fullad />
          </Route>
          <Route path="/postad">
            <Postad />
          </Route>
          <Route exact path="/addrates">
            <Marketrates />
          </Route>
          <Route exact path="/showrates">
            <Showrates />
          </Route>
          <Route exact path="/updaterate/:id">
            <UpdateMarketrates/>
          </Route>
          <Route path="/offices">
            <Showoffices />
          </Route>
          <Route path="/newagrioffice">
            <Newagrioffice />
          </Route>
          <Route exact path="/updateoffice/:id">
            <Editagrioffice />
          </Route>
          <Route path="/weather">
            
           <Todayweather />
         </Route>
         <Route path="/help">
            
            <Helppost />
          </Route>
          <Route path="/showhelpposts">
            
            <Showallpost />
          </Route>
          <Route path="/complain">
          
        <Complain />
      </Route>
      <Route path="/notification">
      
        <Notification />
      </Route>
      <Route exact path="/complaints">
      
        <Cardnotification />
      </Route>
      <Route exact path="/accounts">
      <br />
        <Accounts />
      </Route>
      <Route exact path="/account/:id">
      
        <Acountdata />
      </Route>
      <Route exact path="/showprofile">
            <Myprofile />
      </Route>
      <Route exact path="/aboutus">
            <Aboutus />
      </Route>
     </Switch>
</div>

)