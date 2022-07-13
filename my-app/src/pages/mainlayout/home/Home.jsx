import { Col, Row } from "antd";
import NavSider from "../../../components/layout/navSidebar";
import '../../../scss/home.scss';
import { Carousel } from 'antd';
import React from 'react';
import ApiProduct from "../../../api/apiProducts";
import { useState, useEffect } from "react";

const contentStyle = {
  height: '255px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center',
  background: '#211D1E',
};
function opensearch() {
  console.log('success')
}
function contactme() {
  console.log('success')
}
function handleaccount() {
  console.log('success')
}

function Home() {
  const [productList,setProductList] = useState([]);
  useEffect(() =>{
      const fetchProductList = async () =>{
        const respones = await ApiProduct.getAll();
        setProductList(respones)
      }
      fetchProductList()
    },[]);
    console.log(productList);
  return (
    <>
      <Row className="Home">
        <Col span={6} className="layout-nav-sider">
          <NavSider />
        </Col>
        <Col span={22} className="layout-category">
          <Row className="slider-toll">
            <Col span={18} className="top-trending">
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>sale sap san 1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>sale sap san 2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>sale sap san 3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>sale sap san 4</h3>
                </div>
              </Carousel>
            </Col>
            <Col span={2} className="toll">
              <Row>
                <div onClickCapture={() => opensearch()} className="tollfactor">
                  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7547 36.7757C21.694 36.7749 25.5198 35.4091 28.6229 32.8959L38.3791 43L41.5172 39.7499L31.761 29.6458C34.189 26.4318 35.5085 22.4687 35.5095 18.3879C35.5095 8.24925 27.5443 0 17.7547 0C7.96522 0 0 8.24925 0 18.3879C0 28.5265 7.96522 36.7757 17.7547 36.7757ZM17.7547 4.59696C25.0985 4.59696 31.0708 10.7822 31.0708 18.3879C31.0708 25.9935 25.0985 32.1787 17.7547 32.1787C10.4109 32.1787 4.43868 25.9935 4.43868 18.3879C4.43868 10.7822 10.4109 4.59696 17.7547 4.59696Z" fill="white" />
                    <path d="M20.8885 15.1373C21.7296 16.0107 22.1935 17.1646 22.1935 18.3873H26.6321C26.6341 17.1793 26.4049 15.9829 25.9576 14.8672C25.5104 13.7515 24.8541 12.7387 24.0266 11.8872C20.6666 8.41194 14.8408 8.41194 11.4829 11.8872L14.6166 15.1419C16.3033 13.3996 19.2107 13.4042 20.8885 15.1373Z" fill="white" />
                  </svg>
                </div>
              </Row>
              <hr style={{ color: '#fff' }} />
              <Row>
                <div onClickCapture={() => contactme()} className="tollfactor">
                  <svg width="50" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.7317 7.91776L42.8092 1.26859C41.9642 0.456193 40.8332 0 39.6372 0C38.4412 0 37.3102 0.449944 36.4652 1.26859L29.0096 8.42395C28.1646 9.23635 27.6901 10.33 27.6901 11.4798C27.6901 12.6359 28.1581 13.717 29.0096 14.5357L34.8337 20.1412C33.5069 23.1133 31.6006 25.8136 29.2176 28.0965C26.8321 30.4024 24.0436 32.221 20.9496 33.5083L15.1256 27.9028C14.2806 27.0904 13.1496 26.6342 11.9536 26.6342C11.3636 26.6321 10.7792 26.7432 10.2345 26.961C9.68985 27.1789 9.19587 27.499 8.78154 27.9028L1.31951 35.0581C0.474502 35.8705 0 36.9641 0 38.114C0 39.2701 0.468002 40.3512 1.31951 41.1699L8.23554 47.819C9.67854 49.2064 11.6676 50 13.7086 50C14.1311 50 14.5406 49.9688 14.9566 49.9C23.5626 48.5377 32.1036 44.132 39.0002 37.5078C45.8902 30.8711 50.4662 22.6597 51.8962 14.3795C52.3057 12.0297 51.4867 9.6113 49.7317 7.91776V7.91776ZM47.2877 13.6358C46.0202 21.0036 41.8992 28.3527 35.6917 34.3207C29.4841 40.2887 21.8466 44.2507 14.1831 45.4693C13.2211 45.6255 12.2331 45.3131 11.531 44.6444L4.73852 38.114L11.9406 31.1836L19.7276 38.6827L19.7861 38.7389L21.1901 38.239C25.4471 36.7342 29.3129 34.3575 32.5196 31.2735C35.7262 28.1895 38.197 24.472 39.7607 20.3787L40.2807 19.0289L32.4286 11.4861L39.6307 4.55568L46.4232 11.0861C47.1252 11.761 47.4502 12.7109 47.2877 13.6358Z" fill="white" />
                  </svg>
                </div>
              </Row>
              <hr style={{ color: '#fff' }} />
              <Row>
                <div onClickCapture={() => handleaccount()} className="tollfactor">
                  <svg width="50" height="50" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2 11.1111L21.28 15L28.56 22.2222H0V27.7778H28.56L21.28 35L25.2 38.8889L39.2 25L25.2 11.1111ZM50.4 44.4444H28V50H50.4C53.48 50 56 47.5 56 44.4444V5.55556C56 2.5 53.48 0 50.4 0H28V5.55556H50.4V44.4444Z" fill="white" />
                  </svg>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
