import * as React from "react"
import Header from '../components/header'
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <div className="home_pg">
                <Header/>
                <div className="container">
                    <br/><br/>
                    <div className="row">
                        <div className="col-sm">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"/>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"/>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"/>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="3"
                                            aria-label="Slide 4"/>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="4"
                                            aria-label="Slide 5"/>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="5"
                                            aria-label="Slide 6"/>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <StaticImage src="../images/unavu-kaadu-images-1.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={400}/>
                                    </div>
                                    <div className="carousel-item">
                                        <StaticImage src="../images/unavu-kaadu-images-2.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={350}/>
                                    </div>
                                    <div className="carousel-item">
                                        <StaticImage src="../images/unavu-kaadu-images-9.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={400}/>
                                    </div>
                                    <div className="carousel-item">
                                        <StaticImage src="../images/unavu-kaadu-images-4.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={400}/>
                                    </div>
                                    <div className="carousel-item">
                                        <StaticImage src="../images/unavu-kaadu-images-5.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={400}/>
                                    </div>
                                    <div className="carousel-item">
                                        <StaticImage src="../images/unavu-kaadu-images-7.jpg"
                                                     alt="Unavu kaadu"
                                                     className="d-block w-100"
                                                     placeholder="Unavu kaadu image" height={390}/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="intro_sec_wrap">
                                <h2>What is a Unavu Kaadu (Food Forest)?</h2>
                                <p>A Unavu Kaadu, or edible forest garden, is exactly what it sounds like. It’s a
                                    food-producing
                                    garden which mimics the forest: one of the most widespread and biodiverse ecosystem
                                    types on
                                    Earth.</p>
                                <p>Creating this type of garden isn’t about recreating a completely wild and natural
                                    environment.
                                    It’s about creating a productive garden that will meet your needs for food, beauty,
                                    herbal
                                    remedies, timber, dyes, and many other resources.</p>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col">
                            <StaticImage src="../images/unavu-kaadu-images-6.jpg"
                                         alt="Unavu kaadu"
                                         placeholder="Unavu kaadu image" width={1024}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="why_make_sec">
                                <h2>Why make Unavu Kaadu (Food Forest)?</h2>
                                <p>The benefits of creating a unavu kaadu (Food Forest) are many! The most obvious one
                                    might be
                                    that if properly planned out, a food forest practically runs and maintains itself.
                                    It
                                    creates a habitat for local wildlife, pest control, pollination and wildlife viewing
                                    opportunities. Since food forests do not require chemical fertilizers or pesticides,
                                    they
                                    produce much healthier foods and products. These benefits might include products
                                    such as
                                    fibers, fuels, green manure, materials for crafts, food for domestic animals and can
                                    help
                                    reduce water usage in the garden.</p>
                                <p>How you garden is a reflection of your world view. This more harmonious approach to
                                    nourishing people also provides nourishment for the earth. It allows you to achieve
                                    a means
                                    of more independence from the more destructive modern agricultural methods, while at
                                    the
                                    same time providing you with a more direct relationship to and deeper understanding
                                    of the
                                    interdependence that is required to support all life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="seven_layer_sec">
                        <div className="row">
                            <div className="col-sm">
                                <figure className="figure">
                                    <StaticImage src="../images/ForestGardenLayers.png"
                                                 alt="Unavu kaadu"
                                                 placeholder="Unavu kaadu full image" width={1024}/>
                                    <figcaption className="figure-caption">The seven layers of the forest garden
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h3>An edible forest garden can be divided into vertical storeys:</h3>
                                <p>Tall trees are at the top. Edible examples include most kinds of nut tree and mature
                                    fruit
                                    trees.
                                    Short trees form the layer below that. Edible examples include apple and pear trees
                                    and
                                    dwarf
                                    varieties of all fruit and nut trees, or fruit trees grafted onto rootstocks that
                                    will
                                    keep
                                    them
                                    small.
                                    Below the trees is the shrub and bush layer. Edible plants in this layer include
                                    berry
                                    bushes of all
                                    kinds.
                                    Herbaceous plants, including all the edible kitchen herbs like parsley and rosemary
                                    are
                                    next.
                                    Horizontally spreading ground cover form the lowest layer off the ground. Edible
                                    examples
                                    include
                                    lingonberry and some kinds of strawberry and raspberry.
                                    The lowest layer is the root crops, consisting of all those plants whose edible
                                    portion
                                    grows
                                    underground. Examples include potatoes, ginger and taro.
                                    And lastly the vertically-growing class of vines and climbers. Edible examples
                                    include
                                    runner beans,
                                    kiwis and cucumbers.
                                    The tallest trees should be planted first, spaced apart. Fruit trees from a nursery
                                    would
                                    normally
                                    be used. The the other layers are planted in between these trees.</p>
                                <p>The ground needs to be well mulched at first, when the trees are young and vulnerable
                                    to
                                    being
                                    outcompeted by weeds. Once the forest is mature, after about two years of
                                    cultivation,
                                    there
                                    is
                                    hardly any need for maintenance.</p>
                                <p><i>Having bee hives in the forest is certainly a good idea.</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
