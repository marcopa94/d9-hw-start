import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteFromPref } from "../redux/actions";

const Preferite = () => {
  const dispatch = useDispatch();

  const preferiti = useSelector((state) => {
    return state.preferiti.content;
  });

  return (
    <div>
      <h1>Jobs'add</h1>
      <div className="d-flex flex-wrap">
        {preferiti.map((item, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(deleteFromPref(index));
                }}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Preferite;
