// import React from "react";
// function Zomato() {
//     const somearray = [{
//         person: "pavan",
//         age: 21
//     },
//     {
//         person: "jayanth",
//         age: 55
//     },
//     {
//         person: "harish",
//         age: 33
//     }
//     ]



//        const arrayofobjects= somearray.map((copyofsomearray) => {
//             return (
//                 <div class="col-4">
//                     < h3 > {copyofsomearray.person}</h3 >
//                     < p > {copyofsomearray.age}</p >
//                 </div>
//             )
//         })


//     return (
//         <>
//             {
//                 <>
//                     <div class="container">
//                         <div class="row">
//                             {arrayofobjects}
//                         </div>
//                     </div>

//                 </>
//             }
//         </>
//     )

// }
// export default Zomato;







import React from "react"
function Zomato() {
    const deliverysubdivision = [
        {
            imgsrc: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            mode: "Order Online",
            modespecialization: "Stay home and order to your Desktop"
        },
        {
            imgsrc: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
            mode: "Dining",
            modespecialization: "View the cities favorite Dining Venues"
        }
    ]


    const arrayofobjectsDS = deliverysubdivision.map((copyofdeliverysubdivision) => {
        return (
            <>
                <div class="col-6">
                    <div class="container-1">
                        <img class="img-css1" src={copyofdeliverysubdivision.imgsrc}></img>
                    </div>
                    <h3>{copyofdeliverysubdivision.mode}</h3>
                    <p>{copyofdeliverysubdivision.modespecialization}</p>
                </div>

            </>

        )
    })


    const collections = [
        {
            imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemROd9ZSjQmgNIiyJxgXRd6q39J2Nu69ayw&s",
            collectiontype: "PocketFriendly",
            Places: "6 Places"
        },
        {
            imgsrc: "https://paattiskitchen.com/wp-content/uploads/2023/02/kmc_20230226_002110-1024x576.jpg",

            collectiontype: "Brillient Biryanies",
            Places: "5 Places"
        },
        {
            imgsrc: "https://media.istockphoto.com/id/500466008/photo/beef-steak.jpg?s=612x612&w=0&k=20&c=tw-5wKCwwZ6lHRCbJToMIdiBt1VTNrBEcnifZQS6v_o=",

            collectiontype: "Luxary Dining",
            Places: "5 Places"
        }
    ]


    const arrayofobjectsCS = collections.map((copyofcollections) => {
        return (
            <>

                <div class="col-4">
                    <div class="container-11">
                        <img class="img-css2" src={copyofcollections.imgsrc}></img>
                    </div>
                    <h4>{copyofcollections.collectiontype}</h4>
                    <p>{copyofcollections.Places}</p>

                </div>


            </>

        )
    })


    const locations = [{
        place: "Labbipet",
        places: "257 Places"
    },
    {
        place: "Auto Nagar",
        places: "172 places"
    },
    {
        place: "GovernorPet",
        places: "146 Places"
    },
    {
        place: "Gurunanak Colony",
        places: "146 Places"
    },
    {
        place: "Poranki",
        places: "118 places"
    },
    {
        place: "Islampet",
        places: "108 places"
    },
    {
        place: "Gollapudi",
        places: "88 places"
    },
    {
        place: "Mangalagiri",
        places: "82 places"
    },
    {
        place: "gannavaram",
        places: "23 places"
    }
    ]
    const arrayofL = locations.map((copyoflocations) => {
        return (
            <>

                <div class="col-4">
                    <div class="container-css1">
                        <h4>
                            {copyoflocations.place}
                        </h4>
                        <p>
                            {copyoflocations.places}
                        </p>

                    </div>

                </div>

            </>


        )
    })


    const explorenearme = [{
        place: "Popular Cuisines Near Me"

    },
    {
        place: "Popular Restaurant Types Near me"
    },
    {
        place: "Top Restaurant Chains"
    },
    {
        place: "Cities We Deliver To"
    }

    ]

    const arrayofENE = explorenearme.map((copyofexplorenearme) => {
        return (
            <>

                <div class="col">
                    <div class="container-css2">

                        <h4>
                            {copyofexplorenearme.place}
                        </h4>

                    </div>
                </div >

            </>

        )
    })


    const footerarray = [
        {
            heading: "About Zomato",
            subdivision1: "Who we are",
            subdivision2: "Blog",
            subdivision3: "work with us"
        },
        {
            heading: "zomaverse",
            subdivision1: "Zomato",
            subdivision2: "Blinkit",
            subdivision3: "District"

        },
        {
            heading: "For Restaurants",
            subdivision1: "Partner With Us",
            subdivision2: "Apps For You",
        },
        {
            heading: "Learn More",
            subdivision1: "Privacy",
            subdivision2: "Security",
            subdivision3: "Terms"
        },
    ]

    const arrayofFA = footerarray.map((copyoffooterarray) => {
        return (
            <>
                <div class="col-3">
                    <h4>{copyoffooterarray.heading}</h4>
                    <p>{copyoffooterarray.subdivision1}</p>
                    <p>{copyoffooterarray.subdivision2}</p>
                    <p>{copyoffooterarray.subdivision3}</p>
                </div>
            </>
        )
    })




    return (
        <>
            <div class="container-main1">
                <div class="row">

                    {arrayofobjectsDS}

                </div>
            </div>

            <div class="container-main2">
                <h3>Collections</h3>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Vijayawada, based on trends</p>
                <div class="row">
                    {arrayofobjectsCS}

                </div>
            </div>
            <div class="container">
                <h3>
                    Popular localities in and around Vijayawada
                </h3>
                <div class="row">
                    {arrayofL}

                </div>
            </div>
            <div class="container">
                <h2>
                    Explore options near me
                </h2>
                <div class="row">
                    {arrayofENE}
                </div>
            </div>
            <div class="container">
                <h1>Zomato</h1>
                <div class="row">
                    {arrayofFA}
                </div>
            </div>
        </>
    )
}
export default Zomato;