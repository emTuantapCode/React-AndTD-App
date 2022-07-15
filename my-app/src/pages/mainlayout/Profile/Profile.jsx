import { useState } from "react";
import {Row,Col} from 'antd';
import "../../../sass/profile/profile.scss";
import BuyList from "../../../components/ProfileComponents/BuyList";
import User from "../../../components/ProfileComponents/User";
import UserRank from "../../../components/ProfileComponents/UserRank";
import Voucher from "../../../components/ProfileComponents/Voucher"
const Profile=()=>{
    const [option,setOption]=useState('1');
    const show=props=>{
        if (props==="1") return (<BuyList></BuyList>)
        else if(props==="2") return (<User></User>)
        else if(props==='3') return (<Voucher></Voucher>)
        else return (<UserRank></UserRank>)
    }
    return (
        <div style={{marginTop:40+'px'}}>
            <Row>
                <Col span={6} offset={1}>
                    <div className="profile-options">
                        <div className={option==='1'?"profile-options__item  profile-active":"profile-options__item "} onClick={()=>setOption('1')}>
                        <svg className="profile-options__icon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="currentColor">
<path d="M36.5625 22.5001C36.5628 19.7637 35.7648 17.0867 34.2662 14.7971C32.7677 12.5076 30.6337 10.705 28.1258 9.61027C25.6179 8.51556 22.8451 8.17632 20.1473 8.63412C17.4495 9.09193 14.9439 10.3269 12.9375 12.1876H15.4688C15.8417 12.1876 16.1994 12.3358 16.4631 12.5995C16.7268 12.8632 16.875 13.2209 16.875 13.5939C16.875 13.9668 16.7268 14.3245 16.4631 14.5882C16.1994 14.852 15.8417 15.0001 15.4688 15.0001H9.84376C9.47079 15.0001 9.11311 14.852 8.84939 14.5882C8.58566 14.3245 8.43751 13.9668 8.43751 13.5939V7.96888C8.43751 7.59592 8.58566 7.23823 8.84939 6.97451C9.11311 6.71078 9.47079 6.56263 9.84376 6.56263C10.2167 6.56263 10.5744 6.71078 10.8381 6.97451C11.1018 7.23823 11.25 7.59592 11.25 7.96888V9.92263C14.2133 7.27309 18.0168 5.7547 21.9901 5.63509C25.9633 5.51548 29.8513 6.80233 32.9686 9.26882C36.0859 11.7353 38.2324 15.2231 39.0298 19.1173C39.8272 23.0116 39.2243 27.0624 37.3273 30.5556C35.4303 34.0488 32.361 36.7602 28.6605 38.2119C24.96 39.6636 20.8658 39.7623 17.0996 38.4907C13.3334 37.2191 10.137 34.6588 8.07385 31.2611C6.01067 27.8634 5.21315 23.8464 5.82188 19.9182C5.87834 19.5871 6.05164 19.2871 6.31034 19.0728C6.56904 18.8585 6.89599 18.744 7.23188 18.7501C8.09438 18.7501 8.71501 19.5714 8.58938 20.4226C8.30605 22.3348 8.42002 24.2849 8.92415 26.1511C9.42829 28.0173 10.3118 29.7595 11.5194 31.269C12.7271 32.7784 14.233 34.0226 15.9431 34.924C17.6532 35.8253 19.5307 36.3644 21.4585 36.5076C23.3863 36.6508 25.3229 36.395 27.1473 35.7561C28.9718 35.1173 30.645 34.1091 32.0624 32.7946C33.4798 31.4802 34.6109 29.8876 35.3852 28.1163C36.1595 26.3451 36.5603 24.4332 36.5625 22.5001ZM23.4375 14.5314C23.4375 14.1584 23.2893 13.8007 23.0256 13.537C22.7619 13.2733 22.4042 13.1251 22.0313 13.1251C21.6583 13.1251 21.3006 13.2733 21.0369 13.537C20.7732 13.8007 20.625 14.1584 20.625 14.5314V22.9689C20.625 23.7451 21.255 24.3751 22.0313 24.3751H26.7188C27.0917 24.3751 27.4494 24.227 27.7131 23.9632C27.9768 23.6995 28.125 23.3418 28.125 22.9689C28.125 22.5959 27.9768 22.2382 27.7131 21.9745C27.4494 21.7108 27.0917 21.5626 26.7188 21.5626H23.4375V14.5314Z" fill="#4A4545"/>
</svg>   
                            <span className="profile-options__text">Lịch sử  mua hàng</span>
                        </div>
                        <div className={option==='2'?"profile-options__item  profile-active":"profile-options__item "} onClick={()=>setOption('2')}>
                            
                        <svg className="profile-options__icon"  width="45" height="49" viewBox="0 0 45 49" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M37.727 36.5395C36.8981 34.4013 35.6951 32.4592 34.185 30.8212C32.6796 29.1785 30.8963 27.8688 28.9336 26.9644C28.916 26.9548 28.8984 26.95 28.8808 26.9404C31.6186 24.7871 33.3984 21.2796 33.3984 17.3223C33.3984 10.7666 28.5205 5.45508 22.5 5.45508C16.4795 5.45508 11.6016 10.7666 11.6016 17.3223C11.6016 21.2796 13.3813 24.7871 16.1191 26.9452C16.1016 26.9548 16.084 26.9596 16.0664 26.9691C14.0976 27.8735 12.331 29.1703 10.8149 30.826C9.30633 32.4652 8.10352 34.407 7.27294 36.5442C6.45697 38.6366 6.0169 40.8798 5.97655 43.1525C5.97538 43.2036 5.9836 43.2544 6.00075 43.302C6.01789 43.3495 6.0436 43.3929 6.07636 43.4294C6.10912 43.466 6.14828 43.4951 6.19151 43.5149C6.23475 43.5347 6.2812 43.5449 6.32811 43.5449H8.96483C9.15819 43.5449 9.312 43.3774 9.31639 43.1717C9.40428 39.4775 10.7666 36.0179 13.1748 33.3956C15.6665 30.6824 18.9756 29.1895 22.5 29.1895C26.0244 29.1895 29.3335 30.6824 31.8252 33.3956C34.2334 36.0179 35.5957 39.4775 35.6836 43.1717C35.688 43.3822 35.8418 43.5449 36.0351 43.5449H38.6719C38.7188 43.5449 38.7652 43.5347 38.8085 43.5149C38.8517 43.4951 38.8909 43.466 38.9236 43.4294C38.9564 43.3929 38.9821 43.3495 38.9992 43.302C39.0164 43.2544 39.0246 43.2036 39.0234 43.1525C38.9795 40.8652 38.5444 38.6401 37.727 36.5395ZM22.5 25.5527C20.4829 25.5527 18.5845 24.6962 17.1562 23.141C15.728 21.5858 14.9414 19.5187 14.9414 17.3223C14.9414 15.1259 15.728 13.0587 17.1562 11.5035C18.5845 9.94834 20.4829 9.0918 22.5 9.0918C24.5171 9.0918 26.4155 9.94834 27.8437 11.5035C29.272 13.0587 30.0586 15.1259 30.0586 17.3223C30.0586 19.5187 29.272 21.5858 27.8437 23.141C26.4155 24.6962 24.5171 25.5527 22.5 25.5527Z" fill="#4A4545"/>
</svg>

                            <span className="profile-options__text ">Tài khoản của bạn</span>
                        </div>
                        <div className={option==='3'?"profile-options__item  profile-active":"profile-options__item "} onClick={()=>setOption('3')}>
                        <svg className="profile-options__icon"  width="45" height="46" viewBox="0 0 45 46" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6719 13.9258H32.1855C32.7832 12.9645 33.1348 11.8234 33.1348 10.6016C33.1348 7.18301 30.4146 4.40234 27.0703 4.40234C25.251 4.40234 23.6118 5.22891 22.5 6.53164C21.3882 5.22891 19.749 4.40234 17.9297 4.40234C14.5854 4.40234 11.8652 7.18301 11.8652 10.6016C11.8652 11.8234 12.2124 12.9645 12.8145 13.9258H6.32812C5.55029 13.9258 4.92188 14.5682 4.92188 15.3633V24.3477C4.92188 24.5453 5.08008 24.707 5.27344 24.707H7.03125V40.1602C7.03125 40.9553 7.65967 41.5977 8.4375 41.5977H36.5625C37.3403 41.5977 37.9688 40.9553 37.9688 40.1602V24.707H39.7266C39.9199 24.707 40.0781 24.5453 40.0781 24.3477V15.3633C40.0781 14.5682 39.4497 13.9258 38.6719 13.9258ZM23.9941 10.6016C23.9941 8.86758 25.374 7.45703 27.0703 7.45703C28.7666 7.45703 30.1465 8.86758 30.1465 10.6016C30.1465 12.3355 28.7666 13.7461 27.0703 13.7461H23.9941V10.6016ZM17.9297 7.45703C19.626 7.45703 21.0059 8.86758 21.0059 10.6016V13.7461H17.9297C16.2334 13.7461 14.8535 12.3355 14.8535 10.6016C14.8535 8.86758 16.2334 7.45703 17.9297 7.45703ZM7.91016 21.6523V16.9805H21.0059V21.6523H7.91016ZM10.0195 24.707H21.0059V38.543H10.0195V24.707ZM34.9805 38.543H23.9941V24.707H34.9805V38.543ZM37.0898 21.6523H23.9941V16.9805H37.0898V21.6523Z" fill="#4A4545"/>
</svg>

                            <span className="profile-options__text ">Ưu đãi</span>
                        </div>
                        <div className={option==='4'?"profile-options__item  profile-active":"profile-options__item "} onClick={()=>setOption('4')}>
                        <svg className="profile-options__icon"  width="56" height="56" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M28 49C31.713 49 35.274 47.525 37.8995 44.8995C40.525 42.274 42 38.713 42 35C42 31.287 40.525 27.726 37.8995 25.1005C35.274 22.475 31.713 21 28 21C24.287 21 20.726 22.475 18.1005 25.1005C15.475 27.726 14 31.287 14 35C14 38.713 15.475 42.274 18.1005 44.8995C20.726 47.525 24.287 49 28 49ZM28 52.5C23.3587 52.5 18.9075 50.6563 15.6256 47.3744C12.3437 44.0925 10.5 39.6413 10.5 35C10.5 30.3587 12.3437 25.9075 15.6256 22.6256C18.9075 19.3437 23.3587 17.5 28 17.5C32.6413 17.5 37.0925 19.3437 40.3744 22.6256C43.6563 25.9075 45.5 30.3587 45.5 35C45.5 39.6413 43.6563 44.0925 40.3744 47.3744C37.0925 50.6563 32.6413 52.5 28 52.5Z" fill="#4A4545"/>
<path d="M31.5 7H24.5V17.9375C25.6465 17.6605 26.8206 17.5137 28 17.5C29.0675 17.5 30.233 17.647 31.5 17.9375V7ZM35 7V19.012C36.337 19.509 37.765 20.1285 39.2875 20.867L41.4225 7H35ZM21 7H14.581L16.716 20.867C18.2385 20.1285 19.663 19.509 21 19.012V7ZM12.5405 3.5H43.4595C43.7117 3.5001 43.961 3.55472 44.1901 3.66014C44.4193 3.76555 44.623 3.91926 44.7872 4.11074C44.9514 4.30221 45.0723 4.52692 45.1415 4.76947C45.2108 5.01202 45.2268 5.26668 45.1885 5.516L42 26.25C35.777 22.75 31.1115 21 28 21C24.8885 21 20.223 22.75 14 26.25L10.8115 5.516C10.7731 5.26668 10.7891 5.01202 10.8584 4.76947C10.9277 4.52692 11.0485 4.30221 11.2128 4.11074C11.377 3.91926 11.5806 3.76555 11.8098 3.66014C12.039 3.55472 12.2882 3.5001 12.5405 3.5Z" fill="#4A4545"/>
</svg>

                            <span className="profile-options__text">Hạng thành viên</span>
                        </div>
                        <div className={option==='5'?"profile-options__item  profile-active":"profile-options__item "} onClick={()=>setOption('5')}>
                        <svg className="profile-options__icon"  width="41" height="41" viewBox="0 0 41 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3333 22.2082V18.7915H11.9583V13.6665L3.41663 20.4998L11.9583 27.3332V22.2082H27.3333Z" fill="#4A4545"/>
<path d="M34.1667 5.125H18.7917C16.9074 5.125 15.375 6.65737 15.375 8.54167V15.375H18.7917V8.54167H34.1667V32.4583H18.7917V25.625H15.375V32.4583C15.375 34.3426 16.9074 35.875 18.7917 35.875H34.1667C36.051 35.875 37.5833 34.3426 37.5833 32.4583V8.54167C37.5833 6.65737 36.051 5.125 34.1667 5.125Z" fill="#4A4545"/>
</svg>

                            <span className="profile-options__text">Đăng xuất</span>
                        </div>
                    </div>
                </Col>
                <Col span={15} offset={1}>
                    {show(option)}
                </Col>

            </Row>
        </div>
    )
}
export default Profile;