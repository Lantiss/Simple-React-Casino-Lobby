import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import data from "../../data.json";
import uniqueCategories from "../../utils/getCategories";

export default function Games() {
  const [filter, setFilter] = useState("");
  const [category, setCat] = useState("");
  const [dataDisplay, setDisplay] = useState(data);

  useEffect(() => {
    setDisplay(() => {
      if (category === "9999") {
        return data;
      } else {
        const catFiltered = data.filter((item) => {
          return item.categories.includes(category);
        });
        return catFiltered;
      }
    });
  }, [category]);

  useEffect(() => {
    setDisplay(() => {
      const dataFiltered = data.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
      return dataFiltered;
    });
  }, [filter]);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const handleSelect = (e) => {
    setCat(e);
  };

  return (
    <div>
      <div className="col-12 mb-5 row">
        <div className="mb-3 col-2 mx-auto text-center">
          <input
            type="text"
            className="form-control"
            value={filter}
            onChange={searchText.bind(this)}
            placeholder="Find a Game..."
          />

          <DropdownButton
            id="dropdown-basic-button"
            title="Game Categories"
            onSelect={handleSelect.bind(this)}
          >
            <Dropdown.Item key="9999" eventKey={9999}>
              All
            </Dropdown.Item>
            {uniqueCategories.map((item, index) => (
              <Dropdown.Item key={index} eventKey={item.id}>
                {item.title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
      <Container>
        <Row>
          {dataDisplay.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={3}>
              <Card bg="dark" text="white">
                <Card.Img
                  src={item.icon_2}
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://www.cmsbetconstruct.com/content/images/casino/icon2/8d3b144a69e00d0baf425137159ce94c_casinoGameIcon2.jpeg";
                    event.onError = null;
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.cats[0].title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
