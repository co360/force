/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TagArtworksPaginationQueryVariables = {
    tagID: string;
    count: number;
    cursor?: string | null;
    sort?: string | null;
    priceRange?: string | null;
    dimensionRange?: string | null;
    medium?: string | null;
    forSale?: boolean | null;
};
export type TagArtworksPaginationQueryResponse = {
    readonly tag: {
        readonly " $fragmentRefs": FragmentRefs<"TagArtworks_tag">;
    } | null;
};
export type TagArtworksPaginationQuery = {
    readonly response: TagArtworksPaginationQueryResponse;
    readonly variables: TagArtworksPaginationQueryVariables;
};



/*
query TagArtworksPaginationQuery(
  $tagID: String!
  $count: Int!
  $cursor: String
  $sort: String
  $priceRange: String
  $dimensionRange: String
  $medium: String
  $forSale: Boolean
) {
  tag(id: $tagID) {
    ...TagArtworks_tag_1QTmdc
    id
  }
}

fragment ArtworkGrid_artworks on ArtworkConnectionInterface {
  edges {
    __typename
    node {
      id
      slug
      href
      internalID
      image {
        aspect_ratio: aspectRatio
      }
      ...GridItem_artwork
    }
    ... on Node {
      id
    }
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

fragment Dropdown_aggregation on ArtworksAggregationResults {
  slice
  counts {
    name
    value
    count
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

fragment Headline_facet on ArtworkFilterFacet {
  ... on Tag {
    name
  }
  ... on Gene {
    name
  }
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

fragment TagArtworks_tag_1QTmdc on Tag {
  slug
  filtered_artworks: filterArtworksConnection(aggregations: [MEDIUM, TOTAL, PRICE_RANGE, DIMENSION_RANGE], forSale: $forSale, medium: $medium, priceRange: $priceRange, dimensionRange: $dimensionRange, sort: $sort, first: $count, after: $cursor) {
    ...TotalCount_filter_artworks
    aggregations {
      slice
      counts {
        name
        value
      }
      ...Dropdown_aggregation
    }
    facet {
      __typename
      ...Headline_facet
      ... on Node {
        id
      }
    }
    id
    pageInfo {
      hasNextPage
      endCursor
    }
    ...ArtworkGrid_artworks
    edges {
      node {
        id
        __typename
      }
      cursor
    }
  }
}

fragment TotalCount_filter_artworks on FilterArtworksConnection {
  counts {
    total
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "tagID",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sort",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "priceRange",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dimensionRange",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "medium",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "forSale",
    "type": "Boolean",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "tagID"
  }
],
v2 = {
  "kind": "Variable",
  "name": "dimensionRange",
  "variableName": "dimensionRange"
},
v3 = {
  "kind": "Variable",
  "name": "forSale",
  "variableName": "forSale"
},
v4 = {
  "kind": "Variable",
  "name": "medium",
  "variableName": "medium"
},
v5 = {
  "kind": "Variable",
  "name": "priceRange",
  "variableName": "priceRange"
},
v6 = {
  "kind": "Variable",
  "name": "sort",
  "variableName": "sort"
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v8 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "MEDIUM",
      "TOTAL",
      "PRICE_RANGE",
      "DIMENSION_RANGE"
    ]
  },
  (v2/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/)
],
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v12 = [
  (v9/*: any*/)
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v15 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TagArtworksPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tag",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TagArtworks_tag",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TagArtworksPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tag",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "filtered_artworks",
            "name": "filterArtworksConnection",
            "storageKey": null,
            "args": (v8/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "counts",
                "storageKey": null,
                "args": null,
                "concreteType": "FilterArtworksCounts",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "total",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "aggregations",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slice",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "counts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "value",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "count",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "facet",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "type": "Tag",
                    "selections": (v12/*: any*/)
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Gene",
                    "selections": (v12/*: any*/)
                  }
                ]
              },
              (v11/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": true,
                "selections": [
                  (v10/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v7/*: any*/),
                      (v13/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "internalID",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "aspect_ratio",
                            "name": "aspectRatio",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "placeholder",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "large"
                              }
                            ],
                            "storageKey": "url(version:\"large\")"
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "image_title",
                        "name": "imageTitle",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "sale_message",
                        "name": "saleMessage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "cultural_maker",
                        "name": "culturalMaker",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artists",
                        "storageKey": "artists(shallow:true)",
                        "args": (v14/*: any*/),
                        "concreteType": "Artist",
                        "plural": true,
                        "selections": [
                          (v11/*: any*/),
                          (v13/*: any*/),
                          (v9/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "collecting_institution",
                        "name": "collectingInstitution",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "partner",
                        "storageKey": "partner(shallow:true)",
                        "args": (v14/*: any*/),
                        "concreteType": "Partner",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v13/*: any*/),
                          (v11/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sale",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sale",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "is_auction",
                            "name": "isAuction",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_closed",
                            "name": "isClosed",
                            "args": null,
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "is_live_open",
                            "name": "isLiveOpen",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_open",
                            "name": "isOpen",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_preview",
                            "name": "isPreview",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "display_timely_at",
                            "name": "displayTimelyAt",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "sale_artwork",
                        "name": "saleArtwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "counts",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtworkCounts",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "bidder_positions",
                                "name": "bidderPositions",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": "highest_bid",
                            "name": "highestBid",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtworkHighestBid",
                            "plural": false,
                            "selections": (v15/*: any*/)
                          },
                          {
                            "kind": "LinkedField",
                            "alias": "opening_bid",
                            "name": "openingBid",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtworkOpeningBid",
                            "plural": false,
                            "selections": (v15/*: any*/)
                          },
                          (v11/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_inquireable",
                        "name": "isInquireable",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_saved",
                        "name": "isSaved",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_biddable",
                        "name": "isBiddable",
                        "args": null,
                        "storageKey": null
                      },
                      (v10/*: any*/)
                    ]
                  },
                  (v11/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": "filtered_artworks",
            "name": "filterArtworksConnection",
            "args": (v8/*: any*/),
            "handle": "connection",
            "key": "TagArtworks_filtered_artworks",
            "filters": [
              "aggregations",
              "forSale",
              "medium",
              "priceRange",
              "dimensionRange",
              "sort"
            ]
          },
          (v11/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TagArtworksPaginationQuery",
    "id": null,
    "text": "query TagArtworksPaginationQuery(\n  $tagID: String!\n  $count: Int!\n  $cursor: String\n  $sort: String\n  $priceRange: String\n  $dimensionRange: String\n  $medium: String\n  $forSale: Boolean\n) {\n  tag(id: $tagID) {\n    ...TagArtworks_tag_1QTmdc\n    id\n  }\n}\n\nfragment ArtworkGrid_artworks on ArtworkConnectionInterface {\n  edges {\n    __typename\n    node {\n      id\n      slug\n      href\n      internalID\n      image {\n        aspect_ratio: aspectRatio\n      }\n      ...GridItem_artwork\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment Dropdown_aggregation on ArtworksAggregationResults {\n  slice\n  counts {\n    name\n    value\n    count\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  internalID\n  title\n  image_title: imageTitle\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Headline_facet on ArtworkFilterFacet {\n  ... on Tag {\n    name\n  }\n  ... on Gene {\n    name\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n\nfragment TagArtworks_tag_1QTmdc on Tag {\n  slug\n  filtered_artworks: filterArtworksConnection(aggregations: [MEDIUM, TOTAL, PRICE_RANGE, DIMENSION_RANGE], forSale: $forSale, medium: $medium, priceRange: $priceRange, dimensionRange: $dimensionRange, sort: $sort, first: $count, after: $cursor) {\n    ...TotalCount_filter_artworks\n    aggregations {\n      slice\n      counts {\n        name\n        value\n      }\n      ...Dropdown_aggregation\n    }\n    facet {\n      __typename\n      ...Headline_facet\n      ... on Node {\n        id\n      }\n    }\n    id\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    ...ArtworkGrid_artworks\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment TotalCount_filter_artworks on FilterArtworksConnection {\n  counts {\n    total\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '868545d671d55a43b16d1098b79934ba';
export default node;
