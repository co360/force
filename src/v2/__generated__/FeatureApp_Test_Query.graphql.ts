/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FeatureApp_Test_QueryVariables = {
    slug: string;
};
export type FeatureApp_Test_QueryResponse = {
    readonly feature: {
        readonly " $fragmentRefs": FragmentRefs<"FeatureApp_feature">;
    } | null;
};
export type FeatureApp_Test_QueryRawResponse = {
    readonly feature: ({
        readonly slug: string;
        readonly meta: {
            readonly name: string;
            readonly description: string;
            readonly image: string | null;
        };
        readonly name: string;
        readonly subheadline: string | null;
        readonly image: ({
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly description: string | null;
        readonly callout: string | null;
        readonly sets: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly name: string | null;
                    readonly description: string | null;
                    readonly itemType: string | null;
                    readonly orderedItems: {
                        readonly edges: ReadonlyArray<({
                            readonly node: ({
                                readonly __typename: "FeaturedLink";
                                readonly id: string | null;
                                readonly href: string | null;
                                readonly title: string | null;
                                readonly subtitle: string | null;
                                readonly description: string | null;
                                readonly image: ({
                                    readonly small: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                    readonly medium: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                    readonly large: ({
                                        readonly src: string | null;
                                        readonly width: number | null;
                                        readonly height: number | null;
                                    }) | null;
                                }) | null;
                            } | {
                                readonly __typename: "Artwork";
                                readonly id: string | null;
                                readonly internalID: string;
                                readonly title: string | null;
                                readonly image_title: string | null;
                                readonly image: ({
                                    readonly placeholder: string | null;
                                    readonly url: string | null;
                                    readonly aspect_ratio: number;
                                }) | null;
                                readonly href: string | null;
                                readonly date: string | null;
                                readonly sale_message: string | null;
                                readonly cultural_maker: string | null;
                                readonly artists: ReadonlyArray<({
                                    readonly id: string;
                                    readonly href: string | null;
                                    readonly name: string | null;
                                }) | null> | null;
                                readonly collecting_institution: string | null;
                                readonly partner: ({
                                    readonly name: string | null;
                                    readonly href: string | null;
                                    readonly id: string | null;
                                    readonly type: string | null;
                                }) | null;
                                readonly sale: ({
                                    readonly is_auction: boolean | null;
                                    readonly is_closed: boolean | null;
                                    readonly id: string | null;
                                    readonly is_live_open: boolean | null;
                                    readonly is_open: boolean | null;
                                    readonly is_preview: boolean | null;
                                    readonly display_timely_at: string | null;
                                }) | null;
                                readonly sale_artwork: ({
                                    readonly counts: ({
                                        readonly bidder_positions: number | null;
                                    }) | null;
                                    readonly highest_bid: ({
                                        readonly display: string | null;
                                    }) | null;
                                    readonly opening_bid: ({
                                        readonly display: string | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null;
                                readonly is_inquireable: boolean | null;
                                readonly slug: string;
                                readonly is_saved: boolean | null;
                                readonly is_biddable: boolean | null;
                            } | {
                                readonly __typename: string;
                                readonly id: string | null;
                            }) | null;
                        }) | null> | null;
                    };
                }) | null;
            }) | null> | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type FeatureApp_Test_Query = {
    readonly response: FeatureApp_Test_QueryResponse;
    readonly variables: FeatureApp_Test_QueryVariables;
    readonly rawResponse: FeatureApp_Test_QueryRawResponse;
};



/*
query FeatureApp_Test_Query(
  $slug: ID!
) {
  feature(id: $slug) {
    ...FeatureApp_feature
    id
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FeatureApp_feature on Feature {
  ...FeatureMeta_feature
  ...FeatureHeader_feature
  description(format: HTML)
  callout(format: HTML)
  sets: setsConnection(first: 20) {
    edges {
      node {
        id
        ...FeatureSet_set
      }
    }
  }
}

fragment FeatureFeaturedLink_featuredLink on FeaturedLink {
  href
  title
  subtitle(format: HTML)
  description(format: HTML)
  image {
    small: cropped(width: 800, height: 1000, version: ["wide"]) {
      src: url
      width
      height
    }
    medium: cropped(width: 1092, height: 1365, version: ["wide"]) {
      src: url
      width
      height
    }
    large: cropped(width: 2224, height: 1252, version: ["wide"]) {
      src: url
      width
      height
    }
  }
}

fragment FeatureHeader_feature on Feature {
  name
  subheadline(format: HTML)
  image {
    cropped(width: 2000, height: 2000, version: "source") {
      url
    }
  }
}

fragment FeatureMeta_feature on Feature {
  slug
  meta {
    name
    description
    image
  }
}

fragment FeatureSet_set on OrderedSet {
  id
  name
  description(format: HTML)
  itemType
  orderedItems: orderedItemsConnection(first: 35) {
    edges {
      node {
        __typename
        ... on FeaturedLink {
          id
        }
        ... on Artwork {
          id
        }
        ...GridItem_artwork
        ...FeatureFeaturedLink_featuredLink
        ... on Node {
          id
        }
      }
    }
  }
}

fragment GridItem_artwork on Artwork {
  internalID
  title
  image_title: imageTitle
  image {
    placeholder
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "HTML"
  }
],
v5 = {
  "alias": null,
  "args": (v4/*: any*/),
  "kind": "ScalarField",
  "name": "description",
  "storageKey": "description(format:\"HTML\")"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "kind": "Literal",
  "name": "version",
  "value": [
    "wide"
  ]
},
v10 = [
  {
    "alias": "src",
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "width",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "height",
    "storageKey": null
  }
],
v11 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v12 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FeatureApp_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Feature",
        "kind": "LinkedField",
        "name": "feature",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeatureApp_feature"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FeatureApp_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Feature",
        "kind": "LinkedField",
        "name": "feature",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FeatureMeta",
            "kind": "LinkedField",
            "name": "meta",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "image",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "kind": "ScalarField",
            "name": "subheadline",
            "storageKey": "subheadline(format:\"HTML\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 2000
                  },
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "source"
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 2000
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "kind": "LinkedField",
                "name": "cropped",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": "cropped(height:2000,version:\"source\",width:2000)"
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "kind": "ScalarField",
            "name": "callout",
            "storageKey": "callout(format:\"HTML\")"
          },
          {
            "alias": "sets",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 20
              }
            ],
            "concreteType": "OrderedSetConnection",
            "kind": "LinkedField",
            "name": "setsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderedSetEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderedSet",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v3/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "itemType",
                        "storageKey": null
                      },
                      {
                        "alias": "orderedItems",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 35
                          }
                        ],
                        "concreteType": "OrderedSetItemConnection",
                        "kind": "LinkedField",
                        "name": "orderedItemsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "OrderedSetItemEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v7/*: any*/),
                                      (v8/*: any*/),
                                      {
                                        "alias": null,
                                        "args": (v4/*: any*/),
                                        "kind": "ScalarField",
                                        "name": "subtitle",
                                        "storageKey": "subtitle(format:\"HTML\")"
                                      },
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "kind": "LinkedField",
                                        "name": "image",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": "small",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1000
                                              },
                                              (v9/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 800
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "kind": "LinkedField",
                                            "name": "cropped",
                                            "plural": false,
                                            "selections": (v10/*: any*/),
                                            "storageKey": "cropped(height:1000,version:[\"wide\"],width:800)"
                                          },
                                          {
                                            "alias": "medium",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1365
                                              },
                                              (v9/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 1092
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "kind": "LinkedField",
                                            "name": "cropped",
                                            "plural": false,
                                            "selections": (v10/*: any*/),
                                            "storageKey": "cropped(height:1365,version:[\"wide\"],width:1092)"
                                          },
                                          {
                                            "alias": "large",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "height",
                                                "value": 1252
                                              },
                                              (v9/*: any*/),
                                              {
                                                "kind": "Literal",
                                                "name": "width",
                                                "value": 2224
                                              }
                                            ],
                                            "concreteType": "CroppedImageUrl",
                                            "kind": "LinkedField",
                                            "name": "cropped",
                                            "plural": false,
                                            "selections": (v10/*: any*/),
                                            "storageKey": "cropped(height:1252,version:[\"wide\"],width:2224)"
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "type": "FeaturedLink"
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "internalID",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/),
                                      {
                                        "alias": "image_title",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "imageTitle",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "kind": "LinkedField",
                                        "name": "image",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "placeholder",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "version",
                                                "value": "large"
                                              }
                                            ],
                                            "kind": "ScalarField",
                                            "name": "url",
                                            "storageKey": "url(version:\"large\")"
                                          },
                                          {
                                            "alias": "aspect_ratio",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "aspectRatio",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v7/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "date",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": "sale_message",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "saleMessage",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": "cultural_maker",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "culturalMaker",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": (v11/*: any*/),
                                        "concreteType": "Artist",
                                        "kind": "LinkedField",
                                        "name": "artists",
                                        "plural": true,
                                        "selections": [
                                          (v6/*: any*/),
                                          (v7/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": "artists(shallow:true)"
                                      },
                                      {
                                        "alias": "collecting_institution",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "collectingInstitution",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": (v11/*: any*/),
                                        "concreteType": "Partner",
                                        "kind": "LinkedField",
                                        "name": "partner",
                                        "plural": false,
                                        "selections": [
                                          (v3/*: any*/),
                                          (v7/*: any*/),
                                          (v6/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "type",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": "partner(shallow:true)"
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Sale",
                                        "kind": "LinkedField",
                                        "name": "sale",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": "is_auction",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isAuction",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "is_closed",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isClosed",
                                            "storageKey": null
                                          },
                                          (v6/*: any*/),
                                          {
                                            "alias": "is_live_open",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isLiveOpen",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "is_open",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isOpen",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "is_preview",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "isPreview",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "display_timely_at",
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "displayTimelyAt",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": "sale_artwork",
                                        "args": null,
                                        "concreteType": "SaleArtwork",
                                        "kind": "LinkedField",
                                        "name": "saleArtwork",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkCounts",
                                            "kind": "LinkedField",
                                            "name": "counts",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "alias": "bidder_positions",
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "bidderPositions",
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "highest_bid",
                                            "args": null,
                                            "concreteType": "SaleArtworkHighestBid",
                                            "kind": "LinkedField",
                                            "name": "highestBid",
                                            "plural": false,
                                            "selections": (v12/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": "opening_bid",
                                            "args": null,
                                            "concreteType": "SaleArtworkOpeningBid",
                                            "kind": "LinkedField",
                                            "name": "openingBid",
                                            "plural": false,
                                            "selections": (v12/*: any*/),
                                            "storageKey": null
                                          },
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": "is_inquireable",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isInquireable",
                                        "storageKey": null
                                      },
                                      (v2/*: any*/),
                                      {
                                        "alias": "is_saved",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isSaved",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": "is_biddable",
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isBiddable",
                                        "storageKey": null
                                      }
                                    ],
                                    "type": "Artwork"
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "orderedItemsConnection(first:35)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "setsConnection(first:20)"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FeatureApp_Test_Query",
    "operationKind": "query",
    "text": "query FeatureApp_Test_Query(\n  $slug: ID!\n) {\n  feature(id: $slug) {\n    ...FeatureApp_feature\n    id\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FeatureApp_feature on Feature {\n  ...FeatureMeta_feature\n  ...FeatureHeader_feature\n  description(format: HTML)\n  callout(format: HTML)\n  sets: setsConnection(first: 20) {\n    edges {\n      node {\n        id\n        ...FeatureSet_set\n      }\n    }\n  }\n}\n\nfragment FeatureFeaturedLink_featuredLink on FeaturedLink {\n  href\n  title\n  subtitle(format: HTML)\n  description(format: HTML)\n  image {\n    small: cropped(width: 800, height: 1000, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n    medium: cropped(width: 1092, height: 1365, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n    large: cropped(width: 2224, height: 1252, version: [\"wide\"]) {\n      src: url\n      width\n      height\n    }\n  }\n}\n\nfragment FeatureHeader_feature on Feature {\n  name\n  subheadline(format: HTML)\n  image {\n    cropped(width: 2000, height: 2000, version: \"source\") {\n      url\n    }\n  }\n}\n\nfragment FeatureMeta_feature on Feature {\n  slug\n  meta {\n    name\n    description\n    image\n  }\n}\n\nfragment FeatureSet_set on OrderedSet {\n  id\n  name\n  description(format: HTML)\n  itemType\n  orderedItems: orderedItemsConnection(first: 35) {\n    edges {\n      node {\n        __typename\n        ... on FeaturedLink {\n          id\n        }\n        ... on Artwork {\n          id\n        }\n        ...GridItem_artwork\n        ...FeatureFeaturedLink_featuredLink\n        ... on Node {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  internalID\n  title\n  image_title: imageTitle\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n"
  }
};
})();
(node as any).hash = 'f39dc1e9525921a755f1c2e1b893837f';
export default node;
