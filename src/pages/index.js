import * as React from "react"
import Header from '../components/header'
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <Header/>
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <figure className="figure">
                            <StaticImage className="rounded" src="../images/ForestGardenLayers.png" alt="Unavu kaadu"
                                         placeholder="Unavu kaadu full image" height={400}/>
                            <figcaption className="figure-caption">The seven layers of the forest garden</figcaption>
                        </figure>
                    </div>
                    <div className="col-sm">
                        <h3>An edible forest garden can be divided into vertical storeys:</h3>
                        <p>Tall trees are at the top. Edible examples include most kinds of nut tree and mature fruit
                            trees.
                            Short trees form the layer below that. Edible examples include apple and pear trees and
                            dwarf
                            varieties of all fruit and nut trees, or fruit trees grafted onto rootstocks that will keep
                            them
                            small.
                            Below the trees is the shrub and bush layer. Edible plants in this layer include berry
                            bushes of all
                            kinds.
                            Herbaceous plants, including all the edible kitchen herbs like parsley and rosemary are
                            next.
                            Horizontally spreading ground cover form the lowest layer off the ground. Edible examples
                            include
                            lingonberry and some kinds of strawberry and raspberry.
                            The lowest layer is the root crops, consisting of all those plants whose edible portion
                            grows
                            underground. Examples include potatoes, ginger and taro.
                            And lastly the vertically-growing class of vines and climbers. Edible examples include
                            runner beans,
                            kiwis and cucumbers.
                            The tallest trees should be planted first, spaced apart. Fruit trees from a nursery would
                            normally
                            be used. The the other layers are planted in between these trees.</p>
                        <p>The ground needs to be well mulched at first, when the trees are young and vulnerable to
                            being
                            outcompeted by weeds. Once the forest is mature, after about two years of cultivation, there
                            is
                            hardly any need for maintenance.</p>
                        <p><i>Having bee hives in the forest is certainly a good idea.</i></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
