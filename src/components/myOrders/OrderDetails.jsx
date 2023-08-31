import React from "react";

const OrderDetails = () => {
      
    return (
        <section className="orderDetails">
            <main>
                <div>
                    <h1> Shipping </h1>
                    <p>
                        <strong> Address </strong>
                        {"13525 Connecticut Ave, Silver Spring, Maryland"}
                    </p>
                </div>
                <div>
                    <h1> Conctact </h1>
                    <p>
                        <strong> Name </strong>
                        {"Julian"}
                    </p>
                    <p>
                        <strong> Phone </strong>
                        {"(301) 438-0504"}
                    </p>
                </div>
                <div>
                    <h1> Status </h1>
                    <p>
                        <strong> Order Status </strong>
                        {"Processing"}
                    </p>
                    <p>
                        <strong> Paced At </strong>
                        {"01-08-2023"}
                    </p>
                    <p>
                        <strong> Delivered At </strong>
                        {"01-09-2023"}
                    </p>
                </div>
                <div>
                    <h1> Payment </h1>
                    <p>
                        <strong> Payment Method </strong>
                        {"COD"}
                    </p>
                    <p>
                        <strong> Payment Reference </strong>
                        #{"qazwsxedc"}
                    </p>
                    <p>
                        <strong> Paid At </strong>
                        {"01-09-2023"}
                    </p>
                </div>
                <div>
                    <h1> Amount </h1>
                    <p>
                        <strong> Item Total </strong>
                        ₹{"2132"}
                    </p>
                    <p>
                        <strong> Shipping Charges </strong>
                        ₹{"200"}
                    </p>
                    <p>
                        <strong> Tax </strong>
                        ₹{"232"}
                    </p>
                    <p>
                        <strong> Total Amount </strong>
                        ₹{"232 + 200 + 2132"}
                    </p>
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
                        </div>
                    </div>
                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <h6
                            style={{
                                fontWeight: 800,
                            }}
                        >
                        ₹{2132}
                        </h6>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails


          

