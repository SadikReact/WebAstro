import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import MatchSearch from "../MatchSearch";
import { CloudLightning } from "react-feather";

class FreeKundli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startYear: 1942,
      year: new Date().getFullYear(),
      allYear: [],
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //   componentDidMount() {
  //     for (let i = this.state.startYear; i <= this.state.year; i++) {
  //       this.setState({ allYear: i });
  //       console.log(i);
  //     }
  //   }

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Free Kundli Online</h1>
                    <h3>Get instant & accurate, Janam Kundli</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-50 pt-d">
                <h3>
                  Free Kundli Online - Get Your Detailed Birth Chart with
                  Predictions
                </h3>
                <p>
                  Looking for your free Kundli from expert astrologers? Then you
                  have come to the right place. The online free kundali
                  available on Astrotalk is a 100% free and authentic free
                  Kundli that has been prepared after consulting more than 50
                  expert astrologers on board. The free kundli is such that it
                  can give you a glimpse into various aspects of your life such
                  as your career, love life, marriage, business and much more.
                  The online kundli prepared by the free Kundali software here
                  is no less than any traditional Kundli and can also be used
                  for purposes like matching making, kundali matching for
                  marriage or simply making future predictions.
                </p>

                <p>
                  Talking about future predictions, the kundali catered by
                  Astrotalk to you is such that it considers the movement of all
                  the planets in the native's life from the beginning of his or
                  her life till as far as 100 years. Doing so helps you
                  understand the reasons behind not only the ongoing
                  circumstances but also what's to come for you in the future.
                  So if in any way you are confused about life, the online
                  kundli can be your saviour. Having said that, make sure you
                  try the fre online kunldi, and let us know what you feel about
                  it.
                </p>

                <div className="match-bx">
                  <Row>
                    <Col md="8">
                      <h3>New Kundli</h3>
                      <form>
                        <div className="form-m">
                          <Row>
                            <Col md="12">
                              <label>Name</label>
                              <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                onChange={e => {
                                  console.log(e.target.value);
                                }}
                              />
                            </Col>
                            <Col md="12">
                              <label>Gender</label>
                              <select
                                className="form-control"
                                type="select"
                                name="gender"
                                // value={this.state.gender}
                                onChange={this.changeHandler}
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  --Select--
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Day</label>
                              <select
                                className="form-control"
                                onChange={e => {
                                  console.log(e.target.value);
                                }}
                              >
                                <option>--Select--</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Month</label>
                              <select className="form-control">
                                <option>--Select--</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Year</label>
                              <select
                                className="form-control"
                                name="Birth_Year"
                              >
                                <option>--Select--</option>
                                {/* {this.state.allYear.map(ele => (
                                  <option key={ele} value={ele}>
                                    {ele}
                                  </option>
                                ))} */}
                                {/* <option value={this.state.allYear}>
                                  {this.state.allYear}
                                </option> */}
                                <option value="1943">1943</option>
                                <option value="1944">1944</option>
                                <option value="1945">1945</option>
                                <option value="1946">1946</option>
                                <option value="1947">1947</option>
                                <option value="1948">1948</option>
                                <option value="1949">1949</option>
                                <option value="1950">1950</option>
                                <option value="1951">1951</option>
                                <option value="1952">1952</option>
                                <option value="1953">1953</option>
                                <option value="1954">1954</option>
                                <option value="1955">1955</option>
                                <option value="1956">1956</option>
                                <option value="1957">1957</option>
                                <option value="1958">1958</option>
                                <option value="1959">1959</option>
                                <option value="1960">1960</option>
                                <option value="1961">1961</option>
                                <option value="1962">1962</option>
                                <option value="1963">1963</option>
                                <option value="1964">1964</option>
                                <option value="1965">1965</option>
                                <option value="1966">1966</option>
                                <option value="1967">1967</option>
                                <option value="1968">1968</option>
                                <option value="1969">1969</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Hour</label>
                              <select className="form-control">
                                <option>--Select--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="00">00</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Minute</label>
                              <select className="form-control">
                                <option>--Select--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                <option>00</option>
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Birth Second</label>
                              <select className="form-control">
                                <option>--Select--</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                                <option>32</option>
                                <option>33</option>
                                <option>34</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                                <option>46</option>
                                <option>47</option>
                                <option>48</option>
                                <option>49</option>
                                <option>50</option>
                                <option>51</option>
                                <option>52</option>
                                <option>53</option>
                                <option>54</option>
                                <option>55</option>
                                <option>56</option>
                                <option>57</option>
                                <option>58</option>
                                <option>59</option>
                                {/* <option>60</option> */}
                              </select>
                            </Col>
                            <Col md="12">
                              <label>Birth Place</label>
                              <input
                                type="text"
                                name=""
                                placeholder="Enter Birth Place"
                              />
                            </Col>
                          </Row>
                        </div>
                      </form>
                      <Link to="/kundalimatchlist">
                        <Button className="mt-25">Generate Horoscope</Button>
                      </Link>
                    </Col>
                    <Col md="4">
                      <h3>Saved Matches</h3>
                      <div className="form-m">
                        <Row>
                          <Col>
                            <MatchSearch />
                            <h4 className="mt-3">Recent Views</h4>
                            <hr></hr>
                            <div className="mtkun-box">
                              <Link>
                                <div className="k-bx">
                                  <p>R</p>
                                </div>
                                <div className="k-bxx">
                                  <h5>lorem</h5>
                                  <p>21/09/2022</p>
                                  <p>Indore</p>
                                </div>
                                <div className="k-dlt">
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                              </Link>
                            </div>
                            <div className="mtkun-box">
                              <Link>
                                <div className="k-bx">
                                  <p>S</p>
                                </div>
                                <div className="k-bxx">
                                  <h5>lorem</h5>
                                  <p>21/09/2022</p>
                                  <p>Indore</p>
                                </div>
                                <div className="k-dlt">
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </div>
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

export default FreeKundli;
