export const uidl = {
    "propDefinitions": {},
    "node": {
        "type": "element",
        "content": {
            "elementType": "container",
            "referencedStyles": {},
            "abilities": {},
            "style": {
                "width": {
                    "type": "static",
                    "content": "100%"
                },
                "height": {
                    "type": "static",
                    "content": "auto"
                },
                "display": {
                    "type": "static",
                    "content": "flex"
                },
                "minHeight": {
                    "type": "static",
                    "content": "100vh"
                },
                "alignItems": {
                    "type": "static",
                    "content": "center"
                },
                "flexDirection": {
                    "type": "static",
                    "content": "column"
                }
            },
            "children": [{
                    "type": "element",
                    "content": {
                        "elementType": "container",
                        "name": "Top-container",
                        "referencedStyles": {},
                        "abilities": {},
                        "style": {
                            "width": {
                                "type": "static",
                                "content": "100%"
                            },
                            "height": {
                                "type": "static",
                                "content": "600px"
                            },
                            "display": {
                                "type": "static",
                                "content": "flex"
                            },
                            "alignItems": {
                                "type": "static",
                                "content": "center"
                            },
                            "flexDirection": {
                                "type": "static",
                                "content": "column"
                            },
                            "backgroundSize": {
                                "type": "static",
                                "content": "cover"
                            },
                            "backgroundImage": {
                                "type": "static",
                                "content": "url(\"https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000\")"
                            },
                            "backgroundPosition": {
                                "type": "static",
                                "content": "0% 40%"
                            }
                        },
                        "children": [{
                                "type": "element",
                                "content": {
                                    "elementType": "container",
                                    "name": "Navbar",
                                    "referencedStyles": {},
                                    "abilities": {},
                                    "attrs": {
                                        "data-role": {
                                            "type": "static",
                                            "content": "Header"
                                        }
                                    },
                                    "style": {
                                        "width": {
                                            "type": "static",
                                            "content": "100%"
                                        },
                                        "display": {
                                            "type": "static",
                                            "content": "flex"
                                        },
                                        "padding": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "maxWidth": {
                                            "type": "static",
                                            "content": "1000px"
                                        },
                                        "alignItems": {
                                            "type": "static",
                                            "content": "center"
                                        },
                                        "flexDirection": {
                                            "type": "static",
                                            "content": "row"
                                        },
                                        "justifyContent": {
                                            "type": "static",
                                            "content": "space-between"
                                        }
                                    },
                                    "children": [{
                                            "type": "element",
                                            "content": {
                                                "elementType": "text",
                                                "name": "Logo",
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "children": [{
                                                    "type": "static",
                                                    "content": "Travel"
                                                }],
                                                "semanticType": "h1"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "container",
                                                "name": "Right-side",
                                                "referencedStyles": {
                                                    "b0aed995-f3f0-445e-82eb-03dee183261e": {
                                                        "type": "style-map",
                                                        "content": {
                                                            "conditions": [{
                                                                "maxWidth": 767,
                                                                "conditionType": "screen-size"
                                                            }],
                                                            "mapType": "inlined",
                                                            "styles": {
                                                                "display": {
                                                                    "type": "static",
                                                                    "content": "none"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "abilities": {},
                                                "style": {
                                                    "display": {
                                                        "type": "static",
                                                        "content": "flex"
                                                    },
                                                    "alignItems": {
                                                        "type": "static",
                                                        "content": "center"
                                                    },
                                                    "flexDirection": {
                                                        "type": "static",
                                                        "content": "row"
                                                    },
                                                    "justifyContent": {
                                                        "type": "static",
                                                        "content": "space-between"
                                                    }
                                                },
                                                "children": [{
                                                        "type": "element",
                                                        "content": {
                                                            "elementType": "container",
                                                            "name": "Links-container",
                                                            "referencedStyles": {},
                                                            "abilities": {},
                                                            "style": {
                                                                "display": {
                                                                    "type": "static",
                                                                    "content": "flex"
                                                                },
                                                                "alignItems": {
                                                                    "type": "static",
                                                                    "content": "center"
                                                                },
                                                                "flexDirection": {
                                                                    "type": "static",
                                                                    "content": "row"
                                                                },
                                                                "justifyContent": {
                                                                    "type": "static",
                                                                    "content": "space-between"
                                                                }
                                                            },
                                                            "children": [{
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "text",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "marginRight": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-doubleunit"
                                                                                }
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                            "type": "static",
                                                                            "content": "Home"
                                                                        }],
                                                                        "semanticType": "span"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "text",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "marginRight": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-doubleunit"
                                                                                }
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                            "type": "static",
                                                                            "content": "About"
                                                                        }],
                                                                        "semanticType": "span"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "text",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "marginRight": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-doubleunit"
                                                                                }
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                            "type": "static",
                                                                            "content": "Tour Packages"
                                                                        }],
                                                                        "semanticType": "span"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "text",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "marginRight": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-doubleunit"
                                                                                }
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                            "type": "static",
                                                                            "content": "Contact"
                                                                        }],
                                                                        "semanticType": "span"
                                                                    }
                                                                }
                                                            ],
                                                            "semanticType": "div"
                                                        }
                                                    },
                                                    {
                                                        "type": "element",
                                                        "content": {
                                                            "elementType": "component",
                                                            "dependency": {
                                                                "type": "local"
                                                            },
                                                            "referencedStyles": {},
                                                            "abilities": {
                                                                "link": {
                                                                    "type": "section",
                                                                    "content": {
                                                                        "section": "main-section"
                                                                    }
                                                                }
                                                            },
                                                            "attrs": {
                                                                "button": {
                                                                    "type": "static",
                                                                    "content": "Explore places"
                                                                }
                                                            },
                                                            "children": [],
                                                            "semanticType": "SolidButton"
                                                        }
                                                    }
                                                ],
                                                "semanticType": "div"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "container",
                                                "name": "BurgerMenu",
                                                "referencedStyles": {
                                                    "03b4f11e-c851-4af7-b3f0-650e34eef7e7": {
                                                        "type": "style-map",
                                                        "content": {
                                                            "conditions": [{
                                                                "maxWidth": 767,
                                                                "conditionType": "screen-size"
                                                            }],
                                                            "mapType": "inlined",
                                                            "styles": {
                                                                "display": {
                                                                    "type": "static",
                                                                    "content": "flex"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "abilities": {},
                                                "attrs": {
                                                    "data-type": {
                                                        "type": "static",
                                                        "content": "BurgerMenu"
                                                    }
                                                },
                                                "style": {
                                                    "display": {
                                                        "type": "static",
                                                        "content": "none"
                                                    },
                                                    "alignItems": {
                                                        "type": "static",
                                                        "content": "center"
                                                    },
                                                    "flexDirection": {
                                                        "type": "static",
                                                        "content": "row"
                                                    },
                                                    "justifyContent": {
                                                        "type": "static",
                                                        "content": "space-between"
                                                    }
                                                },
                                                "children": [{
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "icon",
                                                        "name": "Burger-menu",
                                                        "referencedStyles": {},
                                                        "abilities": {},
                                                        "attrs": {
                                                            "viewBox": {
                                                                "type": "static",
                                                                "content": "0 0 1024 1024"
                                                            }
                                                        },
                                                        "style": {
                                                            "width": {
                                                                "type": "static",
                                                                "content": "24px"
                                                            },
                                                            "height": {
                                                                "type": "static",
                                                                "content": "24px"
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "attrs": {
                                                                        "d": {
                                                                            "type": "static",
                                                                            "content": "M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                                                                        }
                                                                    },
                                                                    "children": [],
                                                                    "semanticType": "path"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "attrs": {
                                                                        "d": {
                                                                            "type": "static",
                                                                            "content": "M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                                                                        }
                                                                    },
                                                                    "children": [],
                                                                    "semanticType": "path"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "attrs": {
                                                                        "d": {
                                                                            "type": "static",
                                                                            "content": "M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                                                                        }
                                                                    },
                                                                    "children": [],
                                                                    "semanticType": "path"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }],
                                                "semanticType": "div"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "container",
                                                "name": "MobileMenu",
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "data-type": {
                                                        "type": "static",
                                                        "content": "MobileMenu"
                                                    }
                                                },
                                                "style": {
                                                    "top": {
                                                        "type": "static",
                                                        "content": "0px"
                                                    },
                                                    "flex": {
                                                        "type": "static",
                                                        "content": "0 0 auto"
                                                    },
                                                    "left": {
                                                        "type": "static",
                                                        "content": "0px"
                                                    },
                                                    "width": {
                                                        "type": "static",
                                                        "content": "100%"
                                                    },
                                                    "height": {
                                                        "type": "static",
                                                        "content": "100%"
                                                    },
                                                    "zIndex": {
                                                        "type": "static",
                                                        "content": "100"
                                                    },
                                                    "display": {
                                                        "type": "static",
                                                        "content": "none"
                                                    },
                                                    "padding": {
                                                        "type": "dynamic",
                                                        "content": {
                                                            "referenceType": "token",
                                                            "id": "--dl-space-space-doubleunit"
                                                        }
                                                    },
                                                    "position": {
                                                        "type": "static",
                                                        "content": "absolute"
                                                    },
                                                    "flexDirection": {
                                                        "type": "static",
                                                        "content": "column"
                                                    },
                                                    "justifyContent": {
                                                        "type": "static",
                                                        "content": "space-between"
                                                    },
                                                    "backgroundColor": {
                                                        "type": "static",
                                                        "content": "#fff"
                                                    }
                                                },
                                                "children": [{
                                                        "type": "element",
                                                        "content": {
                                                            "elementType": "container",
                                                            "name": "Nav",
                                                            "referencedStyles": {},
                                                            "abilities": {},
                                                            "style": {
                                                                "flex": {
                                                                    "type": "static",
                                                                    "content": "0 0 auto"
                                                                },
                                                                "display": {
                                                                    "type": "static",
                                                                    "content": "flex"
                                                                },
                                                                "alignItems": {
                                                                    "type": "static",
                                                                    "content": "flex-start"
                                                                },
                                                                "flexDirection": {
                                                                    "type": "static",
                                                                    "content": "column"
                                                                }
                                                            },
                                                            "children": [{
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "container",
                                                                        "name": "Top",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "flex": {
                                                                                "type": "static",
                                                                                "content": "0 0 auto"
                                                                            },
                                                                            "width": {
                                                                                "type": "static",
                                                                                "content": "100%"
                                                                            },
                                                                            "display": {
                                                                                "type": "static",
                                                                                "content": "flex"
                                                                            },
                                                                            "alignItems": {
                                                                                "type": "static",
                                                                                "content": "center"
                                                                            },
                                                                            "marginBottom": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-doubleunit"
                                                                                }
                                                                            },
                                                                            "flexDirection": {
                                                                                "type": "static",
                                                                                "content": "row"
                                                                            },
                                                                            "justifyContent": {
                                                                                "type": "static",
                                                                                "content": "space-between"
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "text",
                                                                                    "name": "Logo",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {},
                                                                                    "children": [{
                                                                                        "type": "static",
                                                                                        "content": "Travel"
                                                                                    }],
                                                                                    "semanticType": "h1"
                                                                                }
                                                                            },
                                                                            {
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "container",
                                                                                    "name": "CloseMenu",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {},
                                                                                    "attrs": {
                                                                                        "data-type": {
                                                                                            "type": "static",
                                                                                            "content": "CloseMobileMenu"
                                                                                        }
                                                                                    },
                                                                                    "style": {
                                                                                        "flex": {
                                                                                            "type": "static",
                                                                                            "content": "0 0 auto"
                                                                                        },
                                                                                        "display": {
                                                                                            "type": "static",
                                                                                            "content": "flex"
                                                                                        },
                                                                                        "alignItems": {
                                                                                            "type": "static",
                                                                                            "content": "flex-start"
                                                                                        },
                                                                                        "flexDirection": {
                                                                                            "type": "static",
                                                                                            "content": "column"
                                                                                        }
                                                                                    },
                                                                                    "children": [{
                                                                                        "type": "element",
                                                                                        "content": {
                                                                                            "elementType": "icon",
                                                                                            "referencedStyles": {},
                                                                                            "abilities": {},
                                                                                            "attrs": {
                                                                                                "viewBox": {
                                                                                                    "type": "static",
                                                                                                    "content": "0 0 1024 1024"
                                                                                                }
                                                                                            },
                                                                                            "style": {
                                                                                                "width": {
                                                                                                    "type": "static",
                                                                                                    "content": "24px"
                                                                                                },
                                                                                                "height": {
                                                                                                    "type": "static",
                                                                                                    "content": "24px"
                                                                                                }
                                                                                            },
                                                                                            "children": [{
                                                                                                "type": "element",
                                                                                                "content": {
                                                                                                    "elementType": "icon",
                                                                                                    "referencedStyles": {},
                                                                                                    "abilities": {},
                                                                                                    "attrs": {
                                                                                                        "d": {
                                                                                                            "type": "static",
                                                                                                            "content": "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                                                                                                        }
                                                                                                    },
                                                                                                    "children": [],
                                                                                                    "semanticType": "path"
                                                                                                }
                                                                                            }]
                                                                                        }
                                                                                    }],
                                                                                    "semanticType": "div"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "semanticType": "div"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "container",
                                                                        "name": "Right-side",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "width": {
                                                                                "type": "static",
                                                                                "content": "100%"
                                                                            },
                                                                            "display": {
                                                                                "type": "static",
                                                                                "content": "flex"
                                                                            },
                                                                            "alignItems": {
                                                                                "type": "static",
                                                                                "content": "flex-start"
                                                                            },
                                                                            "flexDirection": {
                                                                                "type": "static",
                                                                                "content": "column"
                                                                            },
                                                                            "justifyContent": {
                                                                                "type": "static",
                                                                                "content": "space-between"
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "container",
                                                                                    "name": "Links-container",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {},
                                                                                    "style": {
                                                                                        "display": {
                                                                                            "type": "static",
                                                                                            "content": "flex"
                                                                                        },
                                                                                        "alignItems": {
                                                                                            "type": "static",
                                                                                            "content": "flex-start"
                                                                                        },
                                                                                        "marginBottom": {
                                                                                            "type": "static",
                                                                                            "content": "16px"
                                                                                        },
                                                                                        "flexDirection": {
                                                                                            "type": "static",
                                                                                            "content": "column"
                                                                                        },
                                                                                        "justifyContent": {
                                                                                            "type": "static",
                                                                                            "content": "space-between"
                                                                                        }
                                                                                    },
                                                                                    "children": [{
                                                                                            "type": "element",
                                                                                            "content": {
                                                                                                "elementType": "text",
                                                                                                "referencedStyles": {},
                                                                                                "abilities": {},
                                                                                                "style": {
                                                                                                    "marginBottom": {
                                                                                                        "type": "static",
                                                                                                        "content": "8px"
                                                                                                    }
                                                                                                },
                                                                                                "children": [{
                                                                                                    "type": "static",
                                                                                                    "content": "Home"
                                                                                                }],
                                                                                                "semanticType": "span"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "content": {
                                                                                                "elementType": "text",
                                                                                                "referencedStyles": {},
                                                                                                "abilities": {},
                                                                                                "style": {
                                                                                                    "marginBottom": {
                                                                                                        "type": "static",
                                                                                                        "content": "8px"
                                                                                                    }
                                                                                                },
                                                                                                "children": [{
                                                                                                    "type": "static",
                                                                                                    "content": "About"
                                                                                                }],
                                                                                                "semanticType": "span"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "content": {
                                                                                                "elementType": "text",
                                                                                                "referencedStyles": {},
                                                                                                "abilities": {},
                                                                                                "style": {
                                                                                                    "marginBottom": {
                                                                                                        "type": "static",
                                                                                                        "content": "8px"
                                                                                                    }
                                                                                                },
                                                                                                "children": [{
                                                                                                    "type": "static",
                                                                                                    "content": "Tour Packages"
                                                                                                }],
                                                                                                "semanticType": "span"
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "type": "element",
                                                                                            "content": {
                                                                                                "elementType": "text",
                                                                                                "referencedStyles": {},
                                                                                                "abilities": {},
                                                                                                "children": [{
                                                                                                    "type": "static",
                                                                                                    "content": "Contact"
                                                                                                }],
                                                                                                "semanticType": "span"
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    "semanticType": "div"
                                                                                }
                                                                            },
                                                                            {
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "component",
                                                                                    "dependency": {
                                                                                        "type": "local"
                                                                                    },
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {
                                                                                        "link": {
                                                                                            "type": "section",
                                                                                            "content": {
                                                                                                "section": "main-section"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "attrs": {
                                                                                        "button": {
                                                                                            "type": "static",
                                                                                            "content": "Explore places"
                                                                                        }
                                                                                    },
                                                                                    "children": [],
                                                                                    "semanticType": "SolidButton"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "semanticType": "div"
                                                                    }
                                                                }
                                                            ],
                                                            "semanticType": "div"
                                                        }
                                                    },
                                                    {
                                                        "type": "element",
                                                        "content": {
                                                            "elementType": "container",
                                                            "name": "Follow-container",
                                                            "referencedStyles": {},
                                                            "abilities": {},
                                                            "style": {
                                                                "display": {
                                                                    "type": "static",
                                                                    "content": "flex"
                                                                },
                                                                "alignItems": {
                                                                    "type": "static",
                                                                    "content": "flex-start"
                                                                },
                                                                "flexDirection": {
                                                                    "type": "static",
                                                                    "content": "column"
                                                                },
                                                                "justifyContent": {
                                                                    "type": "static",
                                                                    "content": "space-between"
                                                                }
                                                            },
                                                            "children": [{
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "text",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "paddingBottom": {
                                                                                "type": "dynamic",
                                                                                "content": {
                                                                                    "referenceType": "token",
                                                                                    "id": "--dl-space-space-halfunit"
                                                                                }
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                                "type": "static",
                                                                                "content": "Follow us on "
                                                                            },
                                                                            {
                                                                                "type": "raw",
                                                                                "content": " "
                                                                            }
                                                                        ],
                                                                        "semanticType": "span"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "element",
                                                                    "content": {
                                                                        "elementType": "container",
                                                                        "name": "Icons-container",
                                                                        "referencedStyles": {},
                                                                        "abilities": {},
                                                                        "style": {
                                                                            "width": {
                                                                                "type": "static",
                                                                                "content": "100px"
                                                                            },
                                                                            "display": {
                                                                                "type": "static",
                                                                                "content": "flex"
                                                                            },
                                                                            "alignItems": {
                                                                                "type": "static",
                                                                                "content": "flex-start"
                                                                            },
                                                                            "flexDirection": {
                                                                                "type": "static",
                                                                                "content": "row"
                                                                            },
                                                                            "justifyContent": {
                                                                                "type": "static",
                                                                                "content": "space-between"
                                                                            }
                                                                        },
                                                                        "children": [{
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "icon",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {
                                                                                        "link": {
                                                                                            "type": "url",
                                                                                            "content": {
                                                                                                "url": {
                                                                                                    "type": "static",
                                                                                                    "content": "https://instagram.com"
                                                                                                },
                                                                                                "newTab": true
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "attrs": {
                                                                                        "viewBox": {
                                                                                            "type": "static",
                                                                                            "content": "0 0 877.7142857142857 1024"
                                                                                        }
                                                                                    },
                                                                                    "style": {
                                                                                        "width": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        },
                                                                                        "height": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        }
                                                                                    },
                                                                                    "children": [{
                                                                                        "type": "element",
                                                                                        "content": {
                                                                                            "elementType": "icon",
                                                                                            "referencedStyles": {},
                                                                                            "abilities": {},
                                                                                            "attrs": {
                                                                                                "d": {
                                                                                                    "type": "static",
                                                                                                    "content": "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                                                                                                }
                                                                                            },
                                                                                            "children": [],
                                                                                            "semanticType": "path"
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            },
                                                                            {
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "icon",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {
                                                                                        "link": {
                                                                                            "type": "url",
                                                                                            "content": {
                                                                                                "url": {
                                                                                                    "type": "static",
                                                                                                    "content": "https://facebook.com"
                                                                                                },
                                                                                                "newTab": true
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "attrs": {
                                                                                        "viewBox": {
                                                                                            "type": "static",
                                                                                            "content": "0 0 602.2582857142856 1024"
                                                                                        }
                                                                                    },
                                                                                    "style": {
                                                                                        "width": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        },
                                                                                        "height": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        }
                                                                                    },
                                                                                    "children": [{
                                                                                        "type": "element",
                                                                                        "content": {
                                                                                            "elementType": "icon",
                                                                                            "referencedStyles": {},
                                                                                            "abilities": {},
                                                                                            "attrs": {
                                                                                                "d": {
                                                                                                    "type": "static",
                                                                                                    "content": "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                                                                                                }
                                                                                            },
                                                                                            "children": [],
                                                                                            "semanticType": "path"
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            },
                                                                            {
                                                                                "type": "element",
                                                                                "content": {
                                                                                    "elementType": "icon",
                                                                                    "referencedStyles": {},
                                                                                    "abilities": {
                                                                                        "link": {
                                                                                            "type": "url",
                                                                                            "content": {
                                                                                                "url": {
                                                                                                    "type": "static",
                                                                                                    "content": "https://twitter.com"
                                                                                                },
                                                                                                "newTab": true
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "attrs": {
                                                                                        "viewBox": {
                                                                                            "type": "static",
                                                                                            "content": "0 0 950.8571428571428 1024"
                                                                                        }
                                                                                    },
                                                                                    "style": {
                                                                                        "width": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        },
                                                                                        "height": {
                                                                                            "type": "static",
                                                                                            "content": "24px"
                                                                                        }
                                                                                    },
                                                                                    "children": [{
                                                                                        "type": "element",
                                                                                        "content": {
                                                                                            "elementType": "icon",
                                                                                            "referencedStyles": {},
                                                                                            "abilities": {},
                                                                                            "attrs": {
                                                                                                "d": {
                                                                                                    "type": "static",
                                                                                                    "content": "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                                                                                                }
                                                                                            },
                                                                                            "children": [],
                                                                                            "semanticType": "path"
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            }
                                                                        ],
                                                                        "semanticType": "div"
                                                                    }
                                                                }
                                                            ],
                                                            "semanticType": "div"
                                                        }
                                                    }
                                                ],
                                                "semanticType": "div"
                                            }
                                        }
                                    ],
                                    "semanticType": "nav"
                                }
                            },
                            {
                                "type": "element",
                                "content": {
                                    "elementType": "container",
                                    "name": "Hero",
                                    "referencedStyles": {
                                        "9fafe1fc-8b6b-4080-8b8f-2871abaeb9ca": {
                                            "type": "style-map",
                                            "content": {
                                                "conditions": [{
                                                    "maxWidth": 991,
                                                    "conditionType": "screen-size"
                                                }],
                                                "mapType": "inlined",
                                                "styles": {
                                                    "paddingLeft": {
                                                        "type": "dynamic",
                                                        "content": {
                                                            "referenceType": "token",
                                                            "id": "--dl-space-space-tripleunit"
                                                        }
                                                    },
                                                    "paddingRight": {
                                                        "type": "dynamic",
                                                        "content": {
                                                            "referenceType": "token",
                                                            "id": "--dl-space-space-tripleunit"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "b38aa2e4-4090-4cfe-8e59-8c50756aff7f": {
                                            "type": "style-map",
                                            "content": {
                                                "conditions": [{
                                                    "maxWidth": 767,
                                                    "conditionType": "screen-size"
                                                }],
                                                "mapType": "inlined",
                                                "styles": {
                                                    "justifyContent": {
                                                        "type": "static",
                                                        "content": "center"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "abilities": {},
                                    "style": {
                                        "flex": {
                                            "type": "static",
                                            "content": "1"
                                        },
                                        "width": {
                                            "type": "static",
                                            "content": "100%"
                                        },
                                        "display": {
                                            "type": "static",
                                            "content": "flex"
                                        },
                                        "maxWidth": {
                                            "type": "static",
                                            "content": "1000px"
                                        },
                                        "alignItems": {
                                            "type": "static",
                                            "content": "center"
                                        },
                                        "paddingTop": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-tripleunit"
                                            }
                                        },
                                        "paddingLeft": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "paddingRight": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "flexDirection": {
                                            "type": "static",
                                            "content": "row"
                                        },
                                        "paddingBottom": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-tripleunit"
                                            }
                                        },
                                        "justifyContent": {
                                            "type": "static",
                                            "content": "space-between"
                                        }
                                    },
                                    "children": [{
                                        "type": "element",
                                        "content": {
                                            "elementType": "container",
                                            "name": "Content-container",
                                            "referencedStyles": {
                                                "ee2281c6-f58d-49d2-8567-7cc396ae8061": {
                                                    "type": "style-map",
                                                    "content": {
                                                        "conditions": [{
                                                            "maxWidth": 767,
                                                            "conditionType": "screen-size"
                                                        }],
                                                        "mapType": "inlined",
                                                        "styles": {
                                                            "alignItems": {
                                                                "type": "static",
                                                                "content": "center"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "abilities": {},
                                            "style": {
                                                "display": {
                                                    "type": "static",
                                                    "content": "flex"
                                                },
                                                "alignItems": {
                                                    "type": "static",
                                                    "content": "flex-start"
                                                },
                                                "flexDirection": {
                                                    "type": "static",
                                                    "content": "column"
                                                }
                                            },
                                            "children": [{
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "text",
                                                        "referencedStyles": {
                                                            "5ee632c2-a057-46ee-8b34-09709e16d9d4": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "mapType": "project-referenced",
                                                                    "referenceId": "heading"
                                                                }
                                                            },
                                                            "a0a1b3f6-6d56-4e26-89a2-f1e3d7f128a7": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 479,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "fontSize": {
                                                                            "type": "static",
                                                                            "content": "2rem"
                                                                        },
                                                                        "textAlign": {
                                                                            "type": "static",
                                                                            "content": "center"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "d1c7593f-d496-414c-863e-d867eca52a40": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 767,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "fontSize": {
                                                                            "type": "static",
                                                                            "content": "2.5rem"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "abilities": {},
                                                        "children": [{
                                                            "type": "static",
                                                            "content": "Book an exclusive"
                                                        }],
                                                        "semanticType": "h1"
                                                    }
                                                },
                                                {
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "text",
                                                        "name": "Subheading",
                                                        "referencedStyles": {
                                                            "a2bde0cb-57c8-45a1-9c63-d542cdb2e363": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 479,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "fontSize": {
                                                                            "type": "static",
                                                                            "content": "1.3rem"
                                                                        },
                                                                        "textAlign": {
                                                                            "type": "static",
                                                                            "content": "center"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "c02572cb-c56b-4f46-b1b6-c0637d9ee72f": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "mapType": "project-referenced",
                                                                    "referenceId": "subheading"
                                                                }
                                                            }
                                                        },
                                                        "abilities": {},
                                                        "children": [{
                                                            "type": "static",
                                                            "content": "home for your personal travel"
                                                        }],
                                                        "semanticType": "h2"
                                                    }
                                                },
                                                {
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "text",
                                                        "referencedStyles": {
                                                            "bdc55471-93a7-4509-bd0d-6d16827f57f9": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 767,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "textAlign": {
                                                                            "type": "static",
                                                                            "content": "center"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "abilities": {},
                                                        "style": {
                                                            "paddingTop": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-doubleunit"
                                                                }
                                                            },
                                                            "paddingBottom": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-doubleunit"
                                                                }
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "children": [{
                                                                            "type": "static",
                                                                            "content": "Each property is hand-picked, "
                                                                        },
                                                                        {
                                                                            "type": "raw",
                                                                            "content": " "
                                                                        }
                                                                    ],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "children": [],
                                                                    "semanticType": "br"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {},
                                                                    "abilities": {},
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "personally visited and cannot be found elsewhere."
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            }
                                                        ],
                                                        "semanticType": "span"
                                                    }
                                                },
                                                {
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "component",
                                                        "dependency": {
                                                            "type": "local"
                                                        },
                                                        "referencedStyles": {},
                                                        "abilities": {},
                                                        "attrs": {
                                                            "button": {
                                                                "type": "static",
                                                                "content": "Explore homes"
                                                            }
                                                        },
                                                        "children": [],
                                                        "semanticType": "SolidButton"
                                                    }
                                                }
                                            ],
                                            "semanticType": "div"
                                        }
                                    }],
                                    "semanticType": "div"
                                }
                            }
                        ],
                        "semanticType": "div"
                    }
                },
                {
                    "type": "element",
                    "content": {
                        "elementType": "container",
                        "name": "Main",
                        "referencedStyles": {
                            "f06cf5b0-669d-4d21-a61f-73f997996696": {
                                "type": "style-map",
                                "content": {
                                    "conditions": [{
                                        "maxWidth": 767,
                                        "conditionType": "screen-size"
                                    }],
                                    "mapType": "inlined",
                                    "styles": {
                                        "paddingLeft": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-unit"
                                            }
                                        },
                                        "paddingRight": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-unit"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "abilities": {},
                        "attrs": {
                            "id": {
                                "type": "static",
                                "content": "main-section"
                            }
                        },
                        "style": {
                            "width": {
                                "type": "static",
                                "content": "100%"
                            },
                            "display": {
                                "type": "static",
                                "content": "flex"
                            },
                            "alignItems": {
                                "type": "static",
                                "content": "center"
                            },
                            "paddingTop": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-space-space-quadruple"
                                }
                            },
                            "paddingLeft": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-space-space-doubleunit"
                                }
                            },
                            "paddingRight": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-space-space-doubleunit"
                                }
                            },
                            "flexDirection": {
                                "type": "static",
                                "content": "column"
                            },
                            "paddingBottom": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-space-space-quadruple"
                                }
                            },
                            "justifyContent": {
                                "type": "static",
                                "content": "flex-start"
                            }
                        },
                        "children": [{
                                "type": "element",
                                "content": {
                                    "elementType": "text",
                                    "referencedStyles": {},
                                    "abilities": {},
                                    "children": [{
                                        "type": "static",
                                        "content": "Most famous places"
                                    }],
                                    "semanticType": "h1"
                                }
                            },
                            {
                                "type": "element",
                                "content": {
                                    "elementType": "text",
                                    "referencedStyles": {},
                                    "abilities": {},
                                    "style": {
                                        "color": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-color-gray-500"
                                            }
                                        }
                                    },
                                    "children": [{
                                        "type": "static",
                                        "content": "Recommended"
                                    }],
                                    "semanticType": "span"
                                }
                            },
                            {
                                "type": "element",
                                "content": {
                                    "elementType": "container",
                                    "name": "Cards-container",
                                    "referencedStyles": {
                                        "14796d42-2776-406c-aa87-4b32c0fe1b02": {
                                            "type": "style-map",
                                            "content": {
                                                "conditions": [{
                                                    "maxWidth": 991,
                                                    "conditionType": "screen-size"
                                                }],
                                                "mapType": "inlined",
                                                "styles": {
                                                    "justifyContent": {
                                                        "type": "static",
                                                        "content": "center"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "abilities": {},
                                    "style": {
                                        "width": {
                                            "type": "static",
                                            "content": "100%"
                                        },
                                        "display": {
                                            "type": "static",
                                            "content": "flex"
                                        },
                                        "gridGap": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "flexWrap": {
                                            "type": "static",
                                            "content": "wrap"
                                        },
                                        "maxWidth": {
                                            "type": "static",
                                            "content": "1000px"
                                        },
                                        "marginTop": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "alignItems": {
                                            "type": "static",
                                            "content": "flex-start"
                                        },
                                        "marginBottom": {
                                            "type": "dynamic",
                                            "content": {
                                                "referenceType": "token",
                                                "id": "--dl-space-space-doubleunit"
                                            }
                                        },
                                        "flexDirection": {
                                            "type": "static",
                                            "content": "row"
                                        },
                                        "justifyContent": {
                                            "type": "static",
                                            "content": "space-between"
                                        }
                                    },
                                    "children": [{
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "London"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "Rome"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "Cluj-Napoca"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "Paris"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "Amsterdam"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        },
                                        {
                                            "type": "element",
                                            "content": {
                                                "elementType": "component",
                                                "dependency": {
                                                    "type": "local"
                                                },
                                                "referencedStyles": {},
                                                "abilities": {},
                                                "attrs": {
                                                    "city": {
                                                        "type": "static",
                                                        "content": "Barcelona"
                                                    },
                                                    "image": {
                                                        "type": "static",
                                                        "content": "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
                                                    }
                                                },
                                                "children": [],
                                                "semanticType": "PlaceCard"
                                            }
                                        }
                                    ],
                                    "semanticType": "div"
                                }
                            }
                        ],
                        "semanticType": "div"
                    }
                },
                {
                    "type": "element",
                    "content": {
                        "elementType": "container",
                        "name": "Footer",
                        "referencedStyles": {},
                        "abilities": {},
                        "style": {
                            "color": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-color-gray-white"
                                }
                            },
                            "width": {
                                "type": "static",
                                "content": "100%"
                            },
                            "display": {
                                "type": "static",
                                "content": "flex"
                            },
                            "padding": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-space-space-tripleunit"
                                }
                            },
                            "alignItems": {
                                "type": "static",
                                "content": "center"
                            },
                            "flexDirection": {
                                "type": "static",
                                "content": "row"
                            },
                            "justifyContent": {
                                "type": "static",
                                "content": "center"
                            },
                            "backgroundColor": {
                                "type": "dynamic",
                                "content": {
                                    "referenceType": "token",
                                    "id": "--dl-color-gray-black"
                                }
                            }
                        },
                        "children": [{
                            "type": "element",
                            "content": {
                                "elementType": "container",
                                "name": "Menu",
                                "referencedStyles": {
                                    "ffb7e275-3104-4945-a960-934473da98c7": {
                                        "type": "style-map",
                                        "content": {
                                            "conditions": [{
                                                "maxWidth": 767,
                                                "conditionType": "screen-size"
                                            }],
                                            "mapType": "inlined",
                                            "styles": {
                                                "flexDirection": {
                                                    "type": "static",
                                                    "content": "column"
                                                }
                                            }
                                        }
                                    }
                                },
                                "abilities": {},
                                "style": {
                                    "width": {
                                        "type": "static",
                                        "content": "100%"
                                    },
                                    "display": {
                                        "type": "static",
                                        "content": "flex"
                                    },
                                    "maxWidth": {
                                        "type": "static",
                                        "content": "1000px"
                                    },
                                    "alignItems": {
                                        "type": "static",
                                        "content": "center"
                                    },
                                    "flexDirection": {
                                        "type": "static",
                                        "content": "row"
                                    },
                                    "justifyContent": {
                                        "type": "static",
                                        "content": "space-between"
                                    }
                                },
                                "children": [{
                                        "type": "element",
                                        "content": {
                                            "elementType": "text",
                                            "name": "Logo",
                                            "referencedStyles": {},
                                            "abilities": {},
                                            "children": [{
                                                "type": "static",
                                                "content": "Travel"
                                            }],
                                            "semanticType": "h1"
                                        }
                                    },
                                    {
                                        "type": "element",
                                        "content": {
                                            "elementType": "container",
                                            "name": "Links-container",
                                            "referencedStyles": {
                                                "0c0c8b77-cace-4ee4-9f9f-1cdb2fcc811b": {
                                                    "type": "style-map",
                                                    "content": {
                                                        "conditions": [{
                                                            "maxWidth": 767,
                                                            "conditionType": "screen-size"
                                                        }],
                                                        "mapType": "inlined",
                                                        "styles": {
                                                            "marginTop": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-tripleunit"
                                                                }
                                                            },
                                                            "marginBottom": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-tripleunit"
                                                                }
                                                            },
                                                            "justifyContent": {
                                                                "type": "static",
                                                                "content": "space-between"
                                                            }
                                                        }
                                                    }
                                                },
                                                "9ddfca18-c657-4047-836a-4cbd368be926": {
                                                    "type": "style-map",
                                                    "content": {
                                                        "conditions": [{
                                                            "maxWidth": 479,
                                                            "conditionType": "screen-size"
                                                        }],
                                                        "mapType": "inlined",
                                                        "styles": {
                                                            "marginTop": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-doubleunit"
                                                                }
                                                            },
                                                            "alignItems": {
                                                                "type": "static",
                                                                "content": "flex-start"
                                                            },
                                                            "justifyContent": {
                                                                "type": "static",
                                                                "content": "flex-start"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "abilities": {},
                                            "style": {
                                                "display": {
                                                    "type": "static",
                                                    "content": "flex"
                                                },
                                                "alignItems": {
                                                    "type": "static",
                                                    "content": "center"
                                                },
                                                "flexDirection": {
                                                    "type": "static",
                                                    "content": "row"
                                                },
                                                "justifyContent": {
                                                    "type": "static",
                                                    "content": "space-between"
                                                }
                                            },
                                            "children": [{
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "container",
                                                        "referencedStyles": {
                                                            "4152f201-1be5-4384-958a-f7bebccf329e": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 767,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "marginLeft": {
                                                                            "type": "static",
                                                                            "content": "0px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "abilities": {},
                                                        "style": {
                                                            "display": {
                                                                "type": "static",
                                                                "content": "flex"
                                                            },
                                                            "alignItems": {
                                                                "type": "static",
                                                                "content": "flex-start"
                                                            },
                                                            "marginLeft": {
                                                                "type": "static",
                                                                "content": "100px"
                                                            },
                                                            "flexDirection": {
                                                                "type": "static",
                                                                "content": "column"
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "ea1dfc68-0fd1-49cb-8a05-34a869add61e": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "Tour packages"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "a0b6be7f-8683-4c85-81b2-4d55318219fc": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "Personalized offers"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "3f0537f0-0846-48da-afa4-f37d7e5336b5": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "Special deals"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "name": "Link",
                                                                    "referencedStyles": {
                                                                        "b4863836-3dbb-4730-b74a-b99cb0bf3f65": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                            "type": "static",
                                                                            "content": "Summer holiday "
                                                                        },
                                                                        {
                                                                            "type": "raw",
                                                                            "content": " "
                                                                        }
                                                                    ],
                                                                    "semanticType": "span"
                                                                }
                                                            }
                                                        ],
                                                        "semanticType": "div"
                                                    }
                                                },
                                                {
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "container",
                                                        "referencedStyles": {
                                                            "ffeb4a8b-5415-41bb-8385-1078cdc1c92a": {
                                                                "type": "style-map",
                                                                "content": {
                                                                    "conditions": [{
                                                                        "maxWidth": 479,
                                                                        "conditionType": "screen-size"
                                                                    }],
                                                                    "mapType": "inlined",
                                                                    "styles": {
                                                                        "height": {
                                                                            "type": "static",
                                                                            "content": "100%"
                                                                        },
                                                                        "alignItems": {
                                                                            "type": "static",
                                                                            "content": "flex-start"
                                                                        },
                                                                        "marginLeft": {
                                                                            "type": "static",
                                                                            "content": "50px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "abilities": {},
                                                        "style": {
                                                            "display": {
                                                                "type": "static",
                                                                "content": "flex"
                                                            },
                                                            "alignItems": {
                                                                "type": "static",
                                                                "content": "flex-start"
                                                            },
                                                            "marginLeft": {
                                                                "type": "static",
                                                                "content": "100px"
                                                            },
                                                            "flexDirection": {
                                                                "type": "static",
                                                                "content": "column"
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "c02e2e91-922a-4a76-8600-4a744ade8343": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "About us"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "ccca9fac-af8e-42db-89d4-0b4eea06416b": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "FAQ"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "22504323-53da-46ea-845e-aec10acfb322": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "marginBottom": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-space-space-unit"
                                                                            }
                                                                        },
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "Terms and conditions"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "text",
                                                                    "referencedStyles": {
                                                                        "cb98a5a0-fce4-493e-b18c-643b27e291e6": {
                                                                            "type": "style-map",
                                                                            "content": {
                                                                                "conditions": [{
                                                                                    "maxWidth": 479,
                                                                                    "conditionType": "screen-size"
                                                                                }],
                                                                                "mapType": "inlined",
                                                                                "styles": {
                                                                                    "marginBottom": {
                                                                                        "type": "dynamic",
                                                                                        "content": {
                                                                                            "referenceType": "token",
                                                                                            "id": "--dl-space-space-halfunit"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://example.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "textDecoration": {
                                                                            "type": "static",
                                                                            "content": "none"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "static",
                                                                        "content": "Contact"
                                                                    }],
                                                                    "semanticType": "span"
                                                                }
                                                            }
                                                        ],
                                                        "semanticType": "div"
                                                    }
                                                }
                                            ],
                                            "semanticType": "div"
                                        }
                                    },
                                    {
                                        "type": "element",
                                        "content": {
                                            "elementType": "container",
                                            "name": "Follow-container",
                                            "referencedStyles": {
                                                "97b38dec-7526-453d-826b-d0aa8b3e6f9c": {
                                                    "type": "style-map",
                                                    "content": {
                                                        "conditions": [{
                                                            "maxWidth": 479,
                                                            "conditionType": "screen-size"
                                                        }],
                                                        "mapType": "inlined",
                                                        "styles": {
                                                            "marginLeft": {
                                                                "type": "static",
                                                                "content": "0px"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "abilities": {},
                                            "style": {
                                                "display": {
                                                    "type": "static",
                                                    "content": "flex"
                                                },
                                                "alignItems": {
                                                    "type": "static",
                                                    "content": "center"
                                                },
                                                "marginLeft": {
                                                    "type": "static",
                                                    "content": "50px"
                                                },
                                                "flexDirection": {
                                                    "type": "static",
                                                    "content": "column"
                                                },
                                                "justifyContent": {
                                                    "type": "static",
                                                    "content": "space-between"
                                                }
                                            },
                                            "children": [{
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "text",
                                                        "referencedStyles": {},
                                                        "abilities": {},
                                                        "style": {
                                                            "paddingBottom": {
                                                                "type": "dynamic",
                                                                "content": {
                                                                    "referenceType": "token",
                                                                    "id": "--dl-space-space-halfunit"
                                                                }
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "static",
                                                                "content": "Follow us on "
                                                            },
                                                            {
                                                                "type": "raw",
                                                                "content": " "
                                                            }
                                                        ],
                                                        "semanticType": "span"
                                                    }
                                                },
                                                {
                                                    "type": "element",
                                                    "content": {
                                                        "elementType": "container",
                                                        "name": "Icons-container",
                                                        "referencedStyles": {},
                                                        "abilities": {},
                                                        "style": {
                                                            "width": {
                                                                "type": "static",
                                                                "content": "100px"
                                                            },
                                                            "display": {
                                                                "type": "static",
                                                                "content": "flex"
                                                            },
                                                            "alignItems": {
                                                                "type": "static",
                                                                "content": "flex-start"
                                                            },
                                                            "flexDirection": {
                                                                "type": "static",
                                                                "content": "row"
                                                            },
                                                            "justifyContent": {
                                                                "type": "static",
                                                                "content": "space-between"
                                                            }
                                                        },
                                                        "children": [{
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://instagram.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "attrs": {
                                                                        "viewBox": {
                                                                            "type": "static",
                                                                            "content": "0 0 877.7142857142857 1024"
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "fill": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-color-gray-white"
                                                                            }
                                                                        },
                                                                        "width": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        },
                                                                        "height": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "element",
                                                                        "content": {
                                                                            "elementType": "icon",
                                                                            "referencedStyles": {},
                                                                            "abilities": {},
                                                                            "attrs": {
                                                                                "d": {
                                                                                    "type": "static",
                                                                                    "content": "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                                                                                }
                                                                            },
                                                                            "children": [],
                                                                            "semanticType": "path"
                                                                        }
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://facebook.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "attrs": {
                                                                        "viewBox": {
                                                                            "type": "static",
                                                                            "content": "0 0 602.2582857142856 1024"
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "fill": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-color-gray-white"
                                                                            }
                                                                        },
                                                                        "width": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        },
                                                                        "height": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "element",
                                                                        "content": {
                                                                            "elementType": "icon",
                                                                            "referencedStyles": {},
                                                                            "abilities": {},
                                                                            "attrs": {
                                                                                "d": {
                                                                                    "type": "static",
                                                                                    "content": "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                                                                                }
                                                                            },
                                                                            "children": [],
                                                                            "semanticType": "path"
                                                                        }
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                "type": "element",
                                                                "content": {
                                                                    "elementType": "icon",
                                                                    "referencedStyles": {},
                                                                    "abilities": {
                                                                        "link": {
                                                                            "type": "url",
                                                                            "content": {
                                                                                "url": {
                                                                                    "type": "static",
                                                                                    "content": "https://twitter.com"
                                                                                },
                                                                                "newTab": true
                                                                            }
                                                                        }
                                                                    },
                                                                    "attrs": {
                                                                        "viewBox": {
                                                                            "type": "static",
                                                                            "content": "0 0 950.8571428571428 1024"
                                                                        }
                                                                    },
                                                                    "style": {
                                                                        "fill": {
                                                                            "type": "dynamic",
                                                                            "content": {
                                                                                "referenceType": "token",
                                                                                "id": "--dl-color-gray-white"
                                                                            }
                                                                        },
                                                                        "width": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        },
                                                                        "height": {
                                                                            "type": "static",
                                                                            "content": "24px"
                                                                        }
                                                                    },
                                                                    "children": [{
                                                                        "type": "element",
                                                                        "content": {
                                                                            "elementType": "icon",
                                                                            "referencedStyles": {},
                                                                            "abilities": {},
                                                                            "attrs": {
                                                                                "d": {
                                                                                    "type": "static",
                                                                                    "content": "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                                                                                }
                                                                            },
                                                                            "children": [],
                                                                            "semanticType": "path"
                                                                        }
                                                                    }]
                                                                }
                                                            }
                                                        ],
                                                        "semanticType": "div"
                                                    }
                                                }
                                            ],
                                            "semanticType": "div"
                                        }
                                    }
                                ],
                                "semanticType": "div"
                            }
                        }],
                        "semanticType": "div"
                    }
                }
            ],
            "semanticType": "div"
        }
    },
    "name": "Landing Page",
    "styleSetDefinitions": {}
}