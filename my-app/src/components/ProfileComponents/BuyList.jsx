import { Space, Table, Tag } from 'antd';   
import "../../scss/profile/buyList.scss";
import "../../scss/font.scss";
const BuyList=()=>{
    const list=[{
        key:'1',
        MaVanChuyen:'12345',
        TinhTrang:'Đang vận chuyển',
        NgayDat:'2/2/2022',
        DuKienNgayDen:'5/2/2022',
        TongTienThanhToan:'100.000đ'
    },
    {
        key:'2',
        MaVanChuyen:'12345',
        TinhTrang:'Đang vận chuyển',
        NgayDat:'2/2/2022',
        DuKienNgayDen:'5/2/2022',
        TongTienThanhToan:'100.000đ'
    }]
    const column=[
        { 
            title:'Mã vận chuyển',
            dataIndex:'MaVanChuyen',
            key:'MaVanChuyen'
        },
        { 
            title:'Tình Trạng',
            dataIndex:'TinhTrang',
            key:'TinhTrang'
        },
        { 
            title:'Ngày Đặt',
            dataIndex:'NgayDat',
            key:'NgayDat'
        },
        { 
            title:'Dự kiến ngày đến',
            dataIndex:'DuKienNgayDen',
            key:'DuKienNgayDen'
        },
        { 
            title:'Tổng tiền thanh toán',
            dataIndex:'TongTienThanhToan',
            key:'TongTienThanhToan'
        },

    ]
    return(
        <div className="buyList__container montserrat">
            <h2 className="buyList__headerText">Danh sách đơn hàng</h2>
            <div style={{marginLeft:7+'px',marginRight:7+'px'}}>
                <Table rowClassName={()=>'table-row'} dataSource={list} columns={column}></Table>
            </div>
        </div>
    )
}

export default BuyList;