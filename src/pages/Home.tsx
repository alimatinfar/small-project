import Header from "../components/pages/Home/Header/Header";
import Ls from "../utils/localStorage";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import ItemsList from "../components/pages/Home/ItemsList/ItemsList";

function Home() {
  const userInfo = Ls.get('userInfo')
  const navigate = useNavigate()

  useEffect(function () {
    if (!userInfo?.username || !userInfo?.password) {
      navigate('/login', {replace: true})
    }
  }, [userInfo])

  return (
    <>
      <Header userInfo={userInfo} />

      <ItemsList />
    </>
  );
}

export default Home;