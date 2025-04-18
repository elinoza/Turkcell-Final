
import { Container, Row, Col } from "react-bootstrap";
import TradingChart from "./_components/TradingChart";
import BuySellPanel from "./_components/BuySellPanel";
import { getOrderHistory, getTestnetBalance } from "./_components/actions";
import BalancePanel from "./_components/BalancePanel";
import OrderTable from "./_components/OrderTable";
import OrderNavs from "./_components/OrderNavs";
import OrderBook from "./_components/OrderBook";
import RecentTrades from "./_components/RecentTrades";

const TradePage = async() => {
  const balances = await getTestnetBalance();
  const orderHistory= await getOrderHistory("BTCUSDT")
  console.log(orderHistory);

  return (
    <Container fluid className="dashboard py-4 bg-surface">
      <Row className="mb-4">
        <Col>
          <div className="p-3 rounded bg-body shadow-sm">Pair Info Header</div>
        </Col>
      </Row>


      <Row className="mb-4 gx-4">

        <Col xs={12} md={8} className="d-flex flex-column gap-4">
          <div className="p-4 rounded bg-body shadow-sm"><TradingChart/></div>
          <div className="p-4 rounded bg-body shadow-sm"><OrderNavs/><OrderTable orderHistory={orderHistory}/></div>
        </Col>


        <Col xs={12} md={4} className="d-flex flex-column gap-4">
          <div className="p-4 rounded bg-body shadow-sm"><BuySellPanel/></div>
          <div className="p-4 rounded bg-body shadow-sm"><BalancePanel balances={balances}/></div>
        </Col>
      </Row>


      <Row className="gx-4">
        <Col xs={12} md={4}>
          <div className="p-4 rounded bg-body shadow-sm"><OrderBook/></div>
        </Col>
        <Col xs={12} md={4}>
          <div className="p-4 rounded bg-body shadow-sm"><RecentTrades/></div>
        </Col>
        <Col xs={12} md={4}>
          <div className="p-4 rounded bg-body shadow-sm">Coin List</div>
        </Col>
      </Row>
    </Container>
  );
};

export default TradePage;
