import { Fragment, useContext, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import CartContext from "../Context/cart-context";
import axios from "axios";

const CandyForm = () => {
  const Ctx = useContext(CartContext);
  const CandyName = useRef("");
  const CandyDesc = useRef("");
  const CandyNum = useRef("");

  useEffect(() => {
    async function refresh() {
      let res = await axios.get(
        `https://crudcrud.com/api/9cc43f052e0e4ab7ada1c04c6dc40bbd/list`
      );
      let data = await res.data;
      for (var i = 0; i < data.length; i++) {
        Ctx.addItem({
          name: data[i].name,
          description: data[i].description,
          price: data[i].price,
          id: data[i].id,
        });
      }
    }
    refresh();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    let obj = {
      name: CandyName.current.value,
      description: CandyDesc.current.value,
      price: CandyNum.current.value,
      id: Math.random(),
    };

    

    const res = await axios.post(
      `https://crudcrud.com/api/9cc43f052e0e4ab7ada1c04c6dc40bbd/list`,
      obj
    );
    Ctx.addItem(obj);
  };

  return (
    <Fragment>
      <Form onSubmit={submitHandler} className="m-3">
        <Form.Group className="mb-3">
          <Form.Label style={{ color: "green" }}>Candy Name</Form.Label>
          <Form.Control type="text" ref={CandyName} placeholder="Candy Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "green" }}>Description</Form.Label>
          <Form.Control
            type="text"
            ref={CandyDesc}
            placeholder="Candy Description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: "green" }}>Price</Form.Label>
          <Form.Control
            type="number"
            ref={CandyNum}
            placeholder="Candy Price"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default CandyForm;
