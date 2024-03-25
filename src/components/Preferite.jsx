import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

const Preferite = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  const preferiti = useSelector((state) => {
    return state.pref.content;
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
                  dispatch({
                    type: "DELETE_FROM_PREFERITI",
                    payload: index,
                  });
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
