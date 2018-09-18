/* eslint-disable */ module.exports = {
    "context": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master",
    "entry": {
        "app": "./assets/index.js",
        "vendor": [
            "vue",
            "vue-router",
            "vuex"
        ],
        "css/app": "./assets/css/app.scss"
    },
    "output": {
        "path": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/public/build",
        "filename": "[name].js",
        "publicPath": "http://localhost:8080/",
        "pathinfo": true
    },
    "module": {
        "rules": [
            {
                "test": {},
                "exclude": {},
                "use": [
                    {
                        "loader": "babel-loader",
                        "options": {
                            "cacheDirectory": true,
                            "presets": [
                                [
                                    "env",
                                    {
                                        "modules": false,
                                        "targets": {
                                            "browsers": "> 1%",
                                            "uglify": true
                                        },
                                        "useBuiltIns": true
                                    }
                                ],
                                "es2017",
                                "stage-1"
                            ],
                            "plugins": []
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/extract-text-webpack-plugin/dist/loader.js",
                        "options": {
                            "omit": 1,
                            "remove": true
                        }
                    },
                    {
                        "loader": "style-loader?sourceMap"
                    },
                    {
                        "loader": "css-loader",
                        "options": {
                            "minimize": false,
                            "sourceMap": true,
                            "importLoaders": 0
                        }
                    }
                ]
            },
            {
                "test": {},
                "loader": "file-loader",
                "options": {
                    "name": "images/[name].[hash:8].[ext]",
                    "publicPath": "http://localhost:8080/"
                }
            },
            {
                "test": {},
                "loader": "file-loader",
                "options": {
                    "name": "fonts/[name].[hash:8].[ext]",
                    "publicPath": "http://localhost:8080/"
                }
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/extract-text-webpack-plugin/dist/loader.js",
                        "options": {
                            "omit": 1,
                            "remove": true
                        }
                    },
                    {
                        "loader": "style-loader?sourceMap"
                    },
                    {
                        "loader": "css-loader",
                        "options": {
                            "minimize": false,
                            "sourceMap": true,
                            "importLoaders": 0
                        }
                    },
                    {
                        "loader": "resolve-url-loader",
                        "options": {
                            "sourceMap": true
                        }
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": true
                        }
                    }
                ]
            },
            {
                "test": {},
                "use": [
                    {
                        "loader": "vue-loader",
                        "options": {
                            "loaders": {
                                "js": [
                                    {
                                        "loader": "babel-loader",
                                        "options": {
                                            "cacheDirectory": true,
                                            "presets": [
                                                [
                                                    "env",
                                                    {
                                                        "modules": false,
                                                        "targets": {
                                                            "browsers": "> 1%",
                                                            "uglify": true
                                                        },
                                                        "useBuiltIns": true
                                                    }
                                                ],
                                                "es2017",
                                                "stage-1"
                                            ],
                                            "plugins": []
                                        }
                                    }
                                ],
                                "css": [
                                    {
                                        "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/extract-text-webpack-plugin/dist/loader.js",
                                        "options": {
                                            "omit": 1,
                                            "remove": true
                                        }
                                    },
                                    {
                                        "loader": "vue-style-loader?sourceMap"
                                    },
                                    {
                                        "loader": "css-loader",
                                        "options": {
                                            "minimize": false,
                                            "sourceMap": true,
                                            "importLoaders": 0
                                        }
                                    }
                                ],
                                "scss": [
                                    {
                                        "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/extract-text-webpack-plugin/dist/loader.js",
                                        "options": {
                                            "omit": 1,
                                            "remove": true
                                        }
                                    },
                                    {
                                        "loader": "vue-style-loader?sourceMap"
                                    },
                                    {
                                        "loader": "css-loader",
                                        "options": {
                                            "minimize": false,
                                            "sourceMap": true,
                                            "importLoaders": 0
                                        }
                                    },
                                    {
                                        "loader": "resolve-url-loader",
                                        "options": {
                                            "sourceMap": true
                                        }
                                    },
                                    {
                                        "loader": "sass-loader",
                                        "options": {
                                            "sourceMap": true
                                        }
                                    }
                                ],
                                "sass": [
                                    {
                                        "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/extract-text-webpack-plugin/dist/loader.js",
                                        "options": {
                                            "omit": 1,
                                            "remove": true
                                        }
                                    },
                                    {
                                        "loader": "vue-style-loader?sourceMap"
                                    },
                                    {
                                        "loader": "css-loader",
                                        "options": {
                                            "minimize": false,
                                            "sourceMap": true,
                                            "importLoaders": 0
                                        }
                                    },
                                    {
                                        "loader": "resolve-url-loader",
                                        "options": {
                                            "sourceMap": true
                                        }
                                    },
                                    {
                                        "loader": "sass-loader",
                                        "options": {
                                            "indentedSyntax": true,
                                            "sourceMap": true
                                        }
                                    }
                                ],
                                "less": {
                                    "loader": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/@symfony/webpack-encore/lib/loaders/vue-unactivated-loader.js",
                                    "options": {
                                        "lang": "less",
                                        "loaderName": "less-loader",
                                        "featureCommand": "enableLessLoader()"
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    "plugins": [
        {
            "filename": "[name].css",
            "id": 1,
            "options": {
                "allChunks": false
            }
        },
        {
            "entriesToDelete": [
                "css/app"
            ]
        },
        {
            "opts": {
                "publicPath": null,
                "basePath": "",
                "fileName": "manifest.json",
                "transformExtensions": {},
                "writeToFileEmit": true,
                "seed": null,
                "filter": null,
                "map": null,
                "generate": null,
                "sort": null
            }
        },
        {
            "options": {
                "debug": true,
                "options": {
                    "context": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master",
                    "output": {
                        "path": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/public/build"
                    }
                },
                "test": {}
            }
        },
        {
            "options": {}
        },
        {
            "paths": [
                "**/*"
            ],
            "options": {
                "root": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/public/build",
                "verbose": false,
                "allowExternal": false,
                "dry": false
            }
        },
        {
            "chunkNames": [
                "vendor",
                "manifest"
            ],
            "minChunks": null,
            "ident": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0"
        },
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\""
                }
            }
        },
        {
            "options": {
                "title": "Webpack Encore"
            },
            "lastBuildSucceeded": false,
            "isFirstBuild": true
        },
        {
            "compilationSuccessInfo": {
                "messages": []
            },
            "shouldClearConsole": false,
            "formatters": [
                null,
                null,
                null,
                null,
                null,
                null
            ],
            "transformers": [
                null,
                null,
                null,
                null,
                null,
                null
            ]
        },
        {
            "options": {
                "template": "assets/index.html",
                "filename": "index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "chunksSortMode": "auto",
                "meta": {},
                "title": "Webpack App",
                "xhtml": false
            }
        }
    ],
    "devtool": "inline-source-map",
    "devServer": {
        "contentBase": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/public/build",
        "publicPath": "http://localhost:8080/",
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "hot": true,
        "quiet": true,
        "compress": true,
        "historyApiFallback": true,
        "watchOptions": {
            "ignored": {}
        },
        "open": true
    },
    "performance": {
        "hints": false
    },
    "stats": {
        "hash": false,
        "version": false,
        "timings": false,
        "assets": false,
        "chunks": false,
        "maxModules": 0,
        "modules": false,
        "reasons": false,
        "children": false,
        "source": false,
        "errors": false,
        "errorDetails": false,
        "warnings": false,
        "publicPath": false
    },
    "resolve": {
        "extensions": [
            ".js",
            ".jsx",
            ".vue",
            ".ts",
            ".tsx"
        ],
        "alias": {
            "vue$": "vue/dist/vue.esm.js",
            "@": "/mnt/c/Users/BurstLinker 2/Downloads/vue-skeleton-master/assets"
        }
    },
    "externals": {}
}