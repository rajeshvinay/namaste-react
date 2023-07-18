import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Header
 *  - Logo 
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwoString,avgRating,slaString} = resData?.data
    return(
        <div className='res-card' style={{background:'#f0f0f0'}}>
            <img
            className='res-logo'
            alt="res-logo"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${cloudinaryImageId}`} />
            <h3>{name}</h3>   
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoString}</h4>
            <h4>{avgRating}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}

const resArray = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "307",
          "name": "A2B - Adyar Ananda Bhavan",
          "uuid": "ca1d2149-fb41-402a-afd3-7e4f415404b4",
          "city": "1",
          "area": "Btm Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "gxe4mn4ubw70yx3flyar",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Sweets",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "a2b-veg-1st-stage-btm",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "BPCL. Petrol Bunk, #3, 100 Feet Road, I Stage, 16th Main I Phase, BTM Layout,  Bangalore",
          "locality": "1st Stage",
          "parentId": 22,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7405460~p=1~eid=00000189-66d9-b23d-179a-024d00380166~srvts=1689647690301",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "307",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "201224",
          "name": "Asha tiffins",
          "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
          "city": "1",
          "area": "HSR Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "n15vckntsiboiod3gpco",
          "cuisines": [
            "Indian",
            "South Indian",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 4,
          "slugs": {
            "restaurant": "asha-tiffins-hsr-hsr-2",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
          "locality": "7th Sector",
          "parentId": 236243,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹70",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "201224",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 4,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "118278",
          "name": "Namaste",
          "uuid": "55394489-ff7d-4a73-bcca-35ebc0eb5783",
          "city": "1",
          "area": "2nd Stage",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "wya5kg7wxvbh5opfpo1m",
          "cuisines": [
            "South Indian",
            "Thalis",
            "Snacks",
            "Biryani",
            "Indian",
            "Chinese",
            "Desserts",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "slaString": "39 MINS",
          "lastMileTravel": 4.199999809265137,
          "slugs": {
            "restaurant": "namaste-btm",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "69, 7th Main Road, BTM 2nd Stage, Bangalore - 76",
          "locality": "BTM Layout",
          "parentId": 366271,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.1 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "118278",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "lastMileTravel": 4.199999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "660675",
          "name": "Cafe Amudham",
          "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
          "city": "1",
          "area": "Koramangala",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "slaString": "18 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "cafe-amudham-koramangala-koramangala",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
          "locality": "5th Block Kormangala",
          "parentId": 396620,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 2700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7447252~p=4~eid=00000189-66d9-b23d-179a-024e00380446~srvts=1689647690301",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "660675",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "685759",
          "name": "The Rameshwaram Cafe",
          "uuid": "fdb239ce-4023-40fa-8720-5321c236e64b",
          "city": "1",
          "area": "J P Nagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "slaString": "31 MINS",
          "lastMileTravel": 6.800000190734863,
          "slugs": {
            "restaurant": "the-rameshwaram-cafe-jp-nagar-jp-nagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "52, Outer Ring Rd, Jeewan Griha Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
          "locality": "Jeewan Griha Colony",
          "parentId": 384316,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "685759",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "lastMileTravel": 6.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "107476",
          "name": "Davanagere Benne Dose",
          "uuid": "0843868d-938f-4a52-9830-d872172f7d22",
          "city": "1",
          "area": "Jayanagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qz6bnyiainw6carl2vei",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "davanagere-benne-dosa-jayanagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#20/2, 26th main road, puttenapalya( opp ganesha temple) jayanagar 9th block, bangalore",
          "locality": "9th Block",
          "parentId": 399029,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "107476",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "3883",
          "name": "Vidyarthi Bhavan",
          "uuid": "3f4171f1-63c4-461a-a21d-01e5aaa624c6",
          "city": "1",
          "area": "Basavanagudi",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "tvur6lwwvnd2euflpswm",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 7.800000190734863,
          "slugs": {
            "restaurant": "vidhyarthi-bhavan-basavanagudi",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#32, Gandhi Bazar Main Road, Basvangudi, Bangalore-04",
          "locality": "Gandhi Bazaar Main Road",
          "parentId": 20949,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "7.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "3883",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 7.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "52212",
          "name": "Dakshin Cafe",
          "uuid": "0e03406f-8db3-4fd4-adbb-602700affb6a",
          "city": "1",
          "area": "J P Nagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "hssjxq1ojl38ncklnbgb",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "slaString": "44 MINS",
          "lastMileTravel": 9.800000190734863,
          "slugs": {
            "restaurant": "dakshin-cafe-jp-nagar-jp-nagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "NO.007 & 008, KOTHNUR GRAMATANA VILLAGE, UTTARAHALLI HOBLI, BANGALORE., Jayanagar, B.B.M.P South, Karnataka-560062",
          "locality": "7th Phase",
          "parentId": 6276,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 8700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 8700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "8700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "52212",
            "deliveryTime": 44,
            "minDeliveryTime": 44,
            "maxDeliveryTime": 44,
            "lastMileTravel": 9.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "34301",
          "name": "Sri Udupi Park (100ft Road)",
          "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chaat",
            "Beverages",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "slaString": "35 MINS",
          "lastMileTravel": 6.300000190734863,
          "slugs": {
            "restaurant": "sri-udupi-park-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
          "locality": "Defence Colony",
          "parentId": 194697,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "34301",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "lastMileTravel": 6.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "56428",
          "name": "Puliyogare Point",
          "uuid": "49970568-119d-436c-9dad-042d9c07c7ff",
          "city": "1",
          "area": "Basavanagudi",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "slaString": "45 MINS",
          "lastMileTravel": 7.400000095367432,
          "slugs": {
            "restaurant": "puliyogare-point-basavanagudi-basavanagudi",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
          "locality": "N.R Colony",
          "parentId": 8409,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "7.4 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹100",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "56428",
            "deliveryTime": 45,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 45,
            "lastMileTravel": 7.400000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "52307",
          "name": "Sri Udupi Park",
          "uuid": "e78cb731-9fd6-44b4-be6e-00b824fe7ba9",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "cf1d1udfrwtihs08sro2",
          "cuisines": [
            "South Indian",
            "Chaat",
            "North Indian",
            "Beverages",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 5,
          "slugs": {
            "restaurant": "sri-udupi-park-indiranagar-indiranagar-3",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#53, beside leela palace, opp to manipal hospital, kodihalli, old airport road Bangalore - 560008",
          "locality": "Old Airport Road",
          "parentId": 4284,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "52307",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "38013",
          "name": "Green Pepper",
          "uuid": "fed3d3c8-e55a-4188-b1fb-41e76be068b7",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qoxluuv2ocvc3ffgdzug",
          "cuisines": [
            "Kerala",
            "Seafood",
            "Indian",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 5.800000190734863,
          "slugs": {
            "restaurant": "green-pepper-jeevan-bhima-nagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "1650,10th main.Jeevan bhima nagar.HAL3rd stage.indiranagar.bangalore 560075.",
          "locality": "HAL 3rd Stage",
          "parentId": 17009,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7257011~p=16~eid=00000189-66d9-b23d-179a-025200381030~srvts=1689647690301",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "38013",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 5.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "682268",
          "name": "The Filter Coffee",
          "uuid": "a4df81c6-a569-4153-bd7b-48e0e305a85b",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "e707e3eb3c241c42d7bce2b6314a8ddf",
          "cuisines": [
            "South Indian",
            "Beverages",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "slaString": "31 MINS",
          "lastMileTravel": 6.099999904632568,
          "slugs": {
            "restaurant": "the-filter-coffee-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Municipal No 3050, New Ward No 80 & Old BBMP Ward PID No 74-1-3050, HAL II Stage, 80 Feet Road, Indiranagar, Bangalore-560038",
          "locality": "80 Feet Road",
          "parentId": 21001,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7269305~p=19~eid=00000189-66d9-b23d-179a-02530038136e~srvts=1689647690301",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "682268",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "lastMileTravel": 6.099999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "674334",
          "name": "Pasta & Pizza",
          "uuid": "3d8cba84-bcc3-49d9-8615-2f79cbfcd232",
          "city": "1",
          "area": "HSR Layout",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "6d57a1333281cb074256eb0934b1a2da",
          "cuisines": [
            "Pastas",
            "Pizzas",
            "Snacks",
            "Fast Food",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 41,
          "maxDeliveryTime": 41,
          "slaString": "41 MINS",
          "lastMileTravel": 5.599999904632568,
          "slugs": {
            "restaurant": "pasta-&-pizza-hsr-hsr",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "528a, 18th Main Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India",
          "locality": "Sector-3",
          "parentId": 155951,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "5.5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "674334",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "lastMileTravel": 5.599999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.2",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "283196",
          "name": "Krishna Kuteera",
          "uuid": "90147c65-a330-429e-a75f-ff4674391eb2",
          "city": "1",
          "area": "Arekere",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "jzo8vzeb29f6z4xmwwbs",
          "cuisines": [
            "South Indian",
            "Chinese",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 47,
          "minDeliveryTime": 47,
          "maxDeliveryTime": 47,
          "slaString": "47 MINS",
          "lastMileTravel": 8.300000190734863,
          "slugs": {
            "restaurant": "krishna-kuteera-arekere-arekere",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 19 3C, Avanishringeri Nagar, Nyanappanahalli Village, Begur Hobli, Bangalore - 560076",
          "locality": "Avani Shringeri Nagar",
          "parentId": 120876,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 7200,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 7200,
            "message": "",
            "title": "Delivery Charge",
            "amount": "7200",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "283196",
            "deliveryTime": 47,
            "minDeliveryTime": 47,
            "maxDeliveryTime": 47,
            "lastMileTravel": 8.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      }
]


//unique key(best practice) >>> index as key >>> not using keys(not acceptable)
const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {resArray.map(resDat=>{
                    return(
                        <RestaurantCard key={resDat?.data?.id} resData={resDat}  />
                    )
                })}
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)