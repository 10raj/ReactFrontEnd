
import { useEffect } from "react";


export const RazorpayButton = () => {

            const loadRazorpay = () => {
              const script = document.createElement("script");
              script.src = "https://checkout.razorpay.com/v1/checkout.js";
              script.async = true;
              document.body.appendChild(script);
            };
          
            useEffect(() => {
              loadRazorpay();
            }, []);
          
            const handleClick = () => {
              const options = {
                key: "rzp_test_4Paf8GMhgnslr2",
                amount: "599999",
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: "order_LnRuG338Ik2OAU",
                prefill: {
                  name: "Gaurav Kumar",
                  email: "gaurav.kumar@example.com",
                  contact: "9000090000",
                },
                notes: {
                  address: "Razorpay Corporate Office",
                },
                theme: {
                  color: "#3399cc",
                },
                handler: function (response) {
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
                },
              };
              const rzp1 = new window.Razorpay(options);
              rzp1.open();
            };
          
            return (
              <button id="rzp-button1" onClick={handleClick}>
                Pay with Razorpay
              </button>
            );
          };