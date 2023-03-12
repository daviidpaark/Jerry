# A Comparison of Redistricting Algorithms: MGGG vs. Gerrymandering

The redistricting process is a crucial aspect of democracy, as it determines the distribution of political power within a jurisdiction. However, the traditional method of redistricting, known as gerrymandering, has come under criticism for its tendency to favor one political party over another. To address this issue, the Metric Geometry and Gerrymandering Group (MGGG) has developed an alternative algorithm for redistricting that aims to promote fairness and equity. In this application, we will explore the differences between the MGGG algorithm and gerrymandering, highlighting the benefits of the former in promoting fair representation.

# How MGGG Works:

The traditional method of redistricting, known as gerrymandering, has long been criticized for its tendency to favor one political party over another. This practice involves manipulating the boundaries of electoral districts in order to achieve a desired political outcome. As a result, gerrymandering has led to a distortion of representation, as some voters are effectively disenfranchised while others enjoy disproportionate influence. In recent years, there has been growing interest in developing alternative redistricting algorithms that are more equitable and transparent.

One proposed solution is the Metric Geometry and Gerrymandering Group (MGGG) algorithm, which seeks to create districts that are geographically compact and politically representative. By using sophisticated mathematical models, the MGGG algorithm aims to eliminate the bias and partisanship that are inherent in gerrymandering. We will examine the key differences between these two approaches below, and demonstrate why the MGGG algorithm is superior in promoting fair representation.

### Compactness

One of the primary criticisms of gerrymandering is that it often results in highly irregular and non-compact districts. This can make it difficult for voters to understand the political boundaries of their district, and can also lead to a dilution of political representation. The MGGG algorithm seeks to address this issue by prioritizing compactness when creating districts. This means that the algorithm will try to create districts that are geographically contiguous and do not have any strange or convoluted boundaries. By doing so, the MGGG algorithm creates districts that are more intuitive for voters to understand, and also ensures that each district has a more balanced representation of political views.

### Fairness

Another major issue with gerrymandering is that it can lead to an unfair distribution of political power. By drawing district lines in a way that favors one party over another, gerrymandering can result in a situation where one party has a disproportionate amount of political influence. The MGGG algorithm seeks to address this issue by creating districts that are politically representative. This means that the algorithm will try to create districts that reflect the political diversity of the population, rather than favoring one party over another. By doing so, the MGGG algorithm ensures that each district has a fair and equitable distribution of political power.

### Transparency

One of the criticisms of gerrymandering is that it can be difficult for voters to understand how and why their district was created. This lack of transparency can make it difficult for voters to hold their elected officials accountable for their actions. The MGGG algorithm seeks to address this issue by providing a transparent and open process for redistricting. By using publicly available data and algorithms that are based on mathematical models and not generated by partisan bias, the MGGG algorithm ensures that the redistricting process is transparent and easy for voters to understand.

<br/>

The MGGG algorithm offers a promising alternative to traditional gerrymandering for redistricting. By prioritizing compactness, fairness, and transparency, the MGGG algorithm is able to create districts that are more equitable

# How Jerry Implements The MGGG Algorithm:

**Jerry** is an interactive application that demonstrates the outcomes and evaluates the differences between [current gerrymandering](https://projects.fivethirtyeight.com/redistricting-2022-maps/) and the proposed MGGG algorithm.

---

### Single-Member Districts vs. Multi-Member Districts

#### Single-Member Districts (SMD)

Each geographic area or constituency elects one representative to represent them.

#### Multi-Member Districts (MMD)

Several representatives are elected using ranked choice voting to represent a larger constituency.

In addition to the MGGG algorithm, **Jerry** explores the differences between SMD and MMD with ranked choice voting in the proposed 117th Congress bill [H.R.3863 - Fair Representation Act](https://www.congress.gov/bill/117th-congress/house-bill/3863).

---

**Jerry** uses a dataset, or _ensemble_, of 10,000 district plans generated by the MGGG algorithm for both SMD and MMD district plan types to display and evaluate the efficacy in comparison to current gerrymandering plans.

In our implementation, **Jerry** is currently only demonstrated for these three states: _Georgia_, _Maryland_, and _Missouri_.