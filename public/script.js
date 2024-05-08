
        let HELP_CHOOSE = window.HELP_CHOOSE || {};
        HELP_CHOOSE = (() => {
            'use strict';
            console.log('HELP_CHOOSE');

            let products = [
                {
                sku: 'LH55WMBWBGCXXY',
                img: 'img/LH55WMBWBGCXXY.png',
                name: 'Flip',
                specs: ['Fast & multi-touch','3-in-1 USB-C port','Video call applications'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_int','use_corp','use_clr','tim_les16','loc_ofc','loc_sch','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_siz','impt_des','impt_dur','impt_scsh']
                },
                {
                sku: 'LH65WACWLGCXXY',
                img: 'img/LH65WACWLGCXXY.png',
                name: 'WAC',
                specs: ['Android 11 OS','Multiple Screen Mode','Powerful Screen Sharing'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_int','use_corp','use_clr','tim_les16','loc_ofc','loc_sch','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_siz','impt_des','impt_sec','impt_dur','impt_scsh']
                },
                {
                sku: 'LH55QMBTBGCXXY',
                img: 'img/LH55QMBTBGCXXY.png',
                name: 'QMB-T',
                specs: ['Modular functionality to support any payment type','All-in-one solution with upgraded compatibility','Compact and modern design'],
                tags: ['cat_fin','cat_ret','cat_ofc','cat_qsr','use_mtg','use_ads','use_int','use_corp','tim_mor16','loc_ofc','loc_sch','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_siz','impt_des','impt_sec','impt_scsh']
                },
                {
                sku: 'LH24KMC3BGCXXY',
                img: 'img/LH24KMC3BGCXXY.png',
                name: 'Kiosk',
                specs: ['Modular functionality to support any payment type','All-in-one solution with upgraded compatibility','Compact and modern design'],
                tags: ['cat_ret','cat_qsr','use_int','use_pub','tim_les16','loc_pub','siz_sml','via_app','via_cms','impt_siz','impt_des','impt_sec','impt_dur']
                },
                {
                sku: 'LH55QBCEBGCXXY',
                img: 'img/LH55QBCEBGCXXY.png',
                name: 'QBC',
                specs: ['Ultra Slim Depth','Even bezel'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_les16','loc_sch','loc_pub','siz_mid','siz_lrg','via_usb','via_hdmi','via_cms','impt_lco']
                },
                {
                sku: 'LH65QMCEBGCXXY',
                img: 'img/LH65QMCEBGCXXY.png',
                name: 'QMC',
                specs: ['Ultra Slim Depth','Even bezel','Screen sharing up to 6 screens'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_mor16','loc_ret','loc_ofc','loc_sch','loc_pub','siz_mid','siz_lrg','via_usb','via_hdmi','via_cms','impt_bri','impt_scsh']
                },
                {
                sku: 'LH55QHCEBGCXXY',
                img: 'img/LH55QHCEBGCXXY.png',
                name: 'QHC',
                specs: ['Ultra Slim Depth','High Brightness up to 700 nit','Screen sharing up to 6 screens'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_mor16','loc_ret','loc_ofc','loc_pub','siz_mid','siz_lrg','via_usb','via_hdmi','via_cms','impt_bri','impt_scsh']
                },
                {
                sku: 'LH98QECELGCXXY',
                img: 'img/LH98QECELGCXXY.png',
                name: 'QEC',
                specs: ['Super-sized Screen','Comes with base stand','Quantum Processor 4K'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_les16','loc_ofc','loc_sch','loc_pub','siz_lrg','via_usb','via_hdmi','impt_siz','impt_bri','impt_des','impt_lco']
                },
                {
                sku: 'LH85QETELGCXXY',
                img: 'img/LH85QETELGCXXY.png',
                name: 'QET',
                specs: ['Incredible UHD picture quality','Crystal Display','Crystal Processor 4K'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_les16','loc_ofc','loc_sch','loc_pub','siz_lrg','via_usb','via_hdmi','impt_siz','impt_bri','impt_lco']
                },
                {
                sku: 'LH37SHCEBGBXXY',
                img: 'img/LH37SHCEBGBXXY.png',
                name: 'SHC',
                specs: ['16:4.5 wide screen','High Brightness','Non-glare panel'],
                tags: ['cat_fin','cat_ret','use_ads','use_corp','use_pub','tim_mor16','loc_pub','siz_sml','via_usb','via_hdmi','via_cms','impt_siz','impt_bri','impt_des']
                },
                {
                sku: 'LH55OMBEBGBXXY',
                img: 'img/LH55OMBEBGBXXY.png',
                name: 'OM',
                specs: ['Enhance promotions with premium picture quality','Modernize space with slim design','Streamline content management'],
                tags: ['cat_fin','cat_ret','cat_qsr','use_ads','use_pub','tim_mor16','loc_ret','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_pic','impt_bri','impt_des']
                },
                {
                sku: 'LH46OHBESGBXXY',
                img: 'img/LH46OHBESGBXXY.png',
                name: 'OH',
                specs: ['High visibility','Water and dust resistant','Magic Protection Glass'],
                tags: ['cat_fin','cat_ret','cat_qsr','use_ads','use_corp','tim_mor16','loc_ret','loc_out','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_pic','impt_bri','impt_des','impt_sec','impt_dur']
                },
                {
                sku: 'LH55OMNDSGBXXY',
                img: 'img/LH55OMNDSGBXXY.png',
                name: 'Dual side',
                specs: ['Present bright content on a dual-display','Double sided display','Maximize operational efficiency'],
                tags: ['cat_fin','cat_ret','cat_qsr','use_ads','use_pub','tim_mor16','loc_ret','loc_out','loc_pub','siz_mid','via_usb','via_hdmi','via_cms','impt_pic','impt_bri','impt_des','impt_sec','impt_dur']
                },
                {
                sku: 'LH46VMBUBGBXXY',
                img: 'img/LH46VMBUBGBXXY.png',
                name: 'VMBU',
                specs: ['Transform any space with high impact visuals','View content from any angle','Thin bezel at only 3.5mm'],
                tags: ['cat_govt','cat_fin','cat_ret','cat_ofc','use_ads','use_corp','use_hos','tim_mor16','loc_ofc','loc_pub','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_siz','impt_des']
                },
                {
                sku: 'LH55VHBEBGBXXY',
                img: 'img/LH55VHBEBGBXXY.png',
                name: 'VHBE',
                specs: ['Transform any space with high impact visuals','View content from any angle','Thin bezel at only 1.8mm'],
                tags: ['cat_govt','cat_fin','cat_ret','cat_ofc','use_ads','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_siz','impt_bri','impt_des']
                },
                {
                sku: 'LH55VHRRBGBXXY',
                img: 'img/LH55VHRRBGBXXY.png',
                name: 'VHR',
                specs: ['Nearly invisible 0.88 mm bezel','View content from any angle','Image enhancement technology'],
                tags: ['cat_govt','cat_fin','cat_ret','cat_ofc','use_ads','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_siz','impt_bri','impt_des']
                },
                {
                sku: 'LH55VMBEBGBXXY',
                img: 'img/LH55VMBEBGBXXY.png',
                name: 'VMBE',
                specs: ['Transform any space with high impact visuals','View content from any angle','Thin bezel at only 1.8mm'],
                tags: ['cat_govt','cat_fin','cat_ret','cat_ofc','use_ads','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_siz','impt_des']
                },
                {
                sku: 'LH65BECHLGSXNZ',
                img: 'img/LH65BECHLGSXNZ.png',
                name: 'BEC-H',
                specs: ['Samsung Business TV app - simple content management','See every shade of colour as intended in 4K','Enhanced sense of depth and colour'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','use_clr','tim_les16','loc_ofc','loc_sch','loc_pub','siz_mid','siz_lrg','via_usb','via_hdmi','via_cms','via_antv','impt_pic','impt_scsh','impt_lco']
                },
                {
                sku: 'LH015IEACLS/XY',
                img: 'img/LH015IEACLS_XY.png',
                name: 'IEA',
                specs: ['Flexible installation design, including curved','customisable sizing and pixel pitch','up to 1,000 nit brightness'],
                tags: ['cat_edu','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','tim_mor16','loc_ret','loc_ofc','loc_pub','siz_sml','siz_mid','siz_lrg','via_usb','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_scsh']
                },
                {
                sku: 'LH015IFRCLS/XY',
                img: 'img/LH015IFRCLS_XY.png',
                name: 'IFR',
                specs: ['Flexible installation design, including curved','customisable sizing and pixel pitch','up to 2,000 nit brightness'],
                tags: ['cat_edu','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','tim_mor16','loc_ret','loc_ofc','loc_pub','siz_sml','siz_mid','siz_lrg','siz_xl','via_usb','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_scsh']
                },
                {
                sku: 'LH012IECCAC',
                img: 'img/LH012IECCAC.png',
                name: 'IEC',
                specs: ['customisable sizing and pixel pitch','Flexible installation design, including curved'],
                tags: ['cat_edu','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_sml','siz_mid','siz_lrg','siz_xl','via_usb','via_hdmi','via_cms','impt_pic','impt_siz','impt_des','impt_scsh']
                },
                {
                sku: 'LH015IACCHS/XY',
                img: 'img/LH015IACCHS_XY.png',
                name: 'IAC',
                specs: ['Quick Build - 2 hours install','Built-in control box','All inclusive components'],
                tags: ['cat_govt','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_xl','via_usb','via_hdmi','via_cms','impt_siz','impt_bri','impt_des','impt_scsh']
                },
                {
                sku: 'LH100XHBCAE',
                img: 'img/LH100XHBCAE.png',
                name: 'XHB',
                specs: ['High Brightness','Energy Saving','Slim & lightweight'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_ads','use_sta','use_pub','tim_mor16','loc_out','siz_sml','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_dur']
                },
                {
                sku: 'LH067XATSAC/XY',
                img: 'img/LH067XATSAC_XY.png',
                name: 'XAT',
                specs: ['Revitalize outdoor engagement','Clear, consistent picture','Durable in outdoor environments'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_ads','use_sta','use_pub','tim_mor16','loc_out','siz_sml','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_dur']
                },
                {
                sku: 'LH039XRBCYC/XY',
                img: 'img/LH039XRBCYC_XY.png',
                name: 'XRB',
                specs: ['Easy Maintenance and installation','Flexible design','High Brightness'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_ads','use_sta','use_pub','tim_mor16','loc_out','siz_sml','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_dur','impt_scsh']
                },
                {
                sku: 'LH100XFBCZC/XY',
                img: 'img/LH100XFBCZC_XY.png',
                name: 'XFB',
                specs: ['Stand out from the competition','Brilliant visuals perfect for broadcasting','soft design with player safety in mind, including easy rotate - ICE'],
                tags: ['cat_edu','cat_govt','cat_fin','cat_ret','cat_ofc','cat_qsr','use_ads','use_sta','use_pub','tim_mor16','loc_out','siz_sml','siz_mid','siz_lrg','siz_xl','via_hdmi','via_cms','impt_pic','impt_siz','impt_bri','impt_des','impt_dur','impt_scsh']
                },
                {
                sku: 'LH008IWCMWS',
                img: 'img/LH008IWCMWS.png',
                name: 'IWC',
                specs: ['Black Seal Technology+','Micro AI processor','Proven Protection'],
                tags: ['cat_ent','cat_fin','cat_ret','cat_ofc','use_mtg','use_ads','use_ent','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_lrg','siz_xl','via_app','via_hdmi','via_cms','impt_pic','impt_siz','impt_des']
                },
                {
                sku: 'LH006IWBMES',
                img: 'img/LH006IWBMES.png',
                name: 'IWB',
                specs: ['Black Seal Technology','Ultra Chroma Technology','Micro AI Processor'],
                tags: ['cat_ent','cat_fin','cat_ret','cat_ofc','use_ads','use_ent','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_lrg','siz_xl','via_app','via_hdmi','via_cms','impt_pic','impt_siz']
                },
                {
                sku: 'LH021IVCMVS',
                img: 'img/LH021IVCMVS.png',
                name: 'IVC',
                specs: ['Black Seal Technology+','Virtual production manager and optional curved instillation','High refresh rate and high frame rate to match that of your film equipement'],
                tags: ['cat_vipro']
                },
                {
                sku: 'LH008IABMUS/XY',
                img: 'img/LH008IABMUS_XY.png',
                name: 'IAB',
                specs: ['Black Seal Technology','Pre-assembled installation','All-inclusive components'],
                tags: ['cat_fin','cat_ret','cat_ofc','use_mtg','use_corp','use_pub','tim_mor16','loc_ofc','loc_pub','siz_xl','via_hdmi','via_cms','impt_pic','impt_siz']
                },
                {
                sku: 'HG55AU800AWXXY',
                img: 'img/HG55AU800AWXXY.png',
                name: 'HAU800',
                specs: ['Lynk Cloud','Customisable Home App','Customisable app development through Samsung H.Browser'],
                tags: ['cat_edu','cat_hos','cat_ret','use_hos','use_clr','tim_les16','loc_sch','loc_pub','siz_mid','siz_lrg','via_app','via_cms','via_antv','impt_pic','impt_des','impt_rem']
                },
                {
                sku: 'HG55BU800AWXXY',
                img: 'img/HG55BU800AWXXY.png',
                name: 'HBU800',
                specs: ['Lynk Cloud','Customisable Home App','Includes Netflix app availability'],
                tags: ['cat_edu','cat_hos','cat_ret','use_hos','use_clr','tim_les16','loc_sch','loc_pub','siz_mid','siz_lrg','via_app','via_cms','via_antv','impt_pic','impt_des','impt_rem']
                },
                {
                sku: 'HG55CU700AWXXY',
                img: 'img/HG55CU700AWXXY.png',
                name: 'HCU700',
                specs: ['Crystal processor 4K','Lynk Cloud',' Smart Hub'],
                tags: ['cat_edu','cat_hos','cat_ret','use_hos','use_clr','tim_les16','loc_sch','loc_pub','siz_mid','siz_lrg','via_app','via_cms','via_antv','impt_pic','impt_lco','impt_rem']
                },
                {
                sku: 'HG55AT670UKXXY',
                img: 'img/HG55AT670UKXXY.png',
                name: 'HT670',
                specs: ['Premium guest experience','personalised guest engagement',' Smart Hub'],
                tags: ['cat_edu','cat_hos','cat_ret','use_hos','use_clr','tim_les16','loc_sch','loc_pub','siz_mid','via_hdmi','via_antv','impt_pic','impt_sec','impt_lco']
                }];
            
            
            const questions = [
                {
                question: 'What is the nature of your business?',
                hint: 'What you plan to use your screen for will determine the key features your new screen will require so you get the most out of your new screen.',
                options: [ 
                {
                label: 'Education', 
                tag: 'cat_edu'
                }, 
                {
                label: 'Large Home Entertainment', 
                tag: 'cat_ent'
                }, 
                {
                label: 'Virtual production', 
                tag: 'cat_vipro'
                }, 
                {
                label: 'Government', 
                tag: 'cat_govt'
                }, 
                {
                label: 'Hospitality', 
                tag: 'cat_hos'
                }, 
                {
                label: 'Finance', 
                tag: 'cat_fin'
                }, 
                {
                label: 'Retail', 
                tag: 'cat_ret'
                }, 
                {
                label: 'Office', 
                tag: 'cat_ofc'
                }, 
                {
                label: 'QSR', 
                tag: 'cat_qsr'
                }
                ]
                },
                {
                question: 'What is the primary usage for the display',
                hint: 'What you plan to use your screen for will determine the key features your new screen will require so you get the most out of your new screen.',
                options: [ 
                {
                label: 'Meeting/Board room', 
                tag: 'use_mtg'
                }, 
                {
                label: 'Advertising', 
                tag: 'use_ads'
                }, 
                {
                label: 'Entertainment', 
                tag: 'use_ent'
                }, 
                {
                label: 'Interactive – Touch', 
                tag: 'use_int'
                }, 
                {
                label: 'Corporate / Company internal messaging', 
                tag: 'use_corp'
                }, 
                {
                label: 'Stadium/ broadcasting', 
                tag: 'use_sta'
                }, 
                {
                label: 'Public Space', 
                tag: 'use_pub'
                }, 
                {
                label: 'Hospitality', 
                tag: 'use_hos'
                }, 
                {
                label: 'Classroom', 
                tag: 'use_clr'
                }
                ]
                },
                {
                question: 'How long is the display expected to be on each day',
                hint: 'This will ensure that the screen recommended is built to be used for the length of time you require for the best possible experience from your new screen.',
                options: [ 
                {
                label: 'Less than 16hrs', 
                tag: 'tim_les16'
                }, 
                {
                label: 'More than 16hrs', 
                tag: 'tim_mor16'
                }
                ]
                },
                {
                question: 'What environment will the display be installed',
                hint: 'This will determine how durable your screen needs to be. For example, outdoor screens require the most durability to withstand various weather patterns, or school and public space screens need to withstand high traffic locations and potential abuse from the general public.',
                options: [ 
                {
                label: 'Retail window', 
                tag: 'loc_ret'
                }, 
                {
                label: 'Outdoors', 
                tag: 'loc_out'
                }, 
                {
                label: 'Office', 
                tag: 'loc_ofc'
                }, 
                {
                label: 'Schools', 
                tag: 'loc_sch'
                }, 
                {
                label: 'Indoor Public Space', 
                tag: 'loc_pub'
                }
                ]
                },
                {
                question: 'What is the general size screen that could be suitable',
                hint: 'Not all screens come in the same sizes. This can be discussed with your reseller if you are unsure.',
                options: [ 
                {
                label: 'Small Screen 13-32”', 
                tag: 'siz_sml'
                }, 
                {
                label: 'Mid-size Screen 43-65', 
                tag: 'siz_mid'
                }, 
                {
                label: 'Large size screen 75-98”', 
                tag: 'siz_lrg'
                }, 
                {
                label: 'Extra Large 100” +', 
                tag: 'siz_xl'
                }, 
                {
                label: 'Various', 
                tag: 'siz_var'
                }
                ]
                },
                {
                question: 'How do you plan to deliver content to the screen',
                hint: 'There are many ways to connect to various screens depending on your needs. If you have one screen that is updated irregularly, then a USB or Connected screen will be enough for your needs. If you need to push one message to multiple screens at once, a management system of webfeed would be beneficial for you.',
                options: [ 
                {
                label: 'Via USB', 
                tag: 'via_usb'
                }, 
                {
                label: 'Via Apps', 
                tag: 'via_app'
                }, 
                {
                label: 'Via device thru HDMI', 
                tag: 'via_hdmi'
                }, 
                {
                label: 'Via CMS', 
                tag: 'via_cms'
                }, 
                {
                label: 'Via Analogue TV', 
                tag: 'via_antv'
                }
                ]
                },
                {
                question: 'What are the most important factors when selecting a digital display',
                hint: 'What else is important to you when deciding what you want out of your new screen.',
                options: [ 
                {
                label: 'Quality of picture', 
                tag: 'impt_pic'
                }, 
                {
                label: 'Size and impact of the screen', 
                tag: 'impt_siz'
                }, 
                {
                label: 'Brightness', 
                tag: 'impt_bri'
                }, 
                {
                label: 'Design', 
                tag: 'impt_des'
                }, 
                {
                label: 'Security', 
                tag: 'impt_sec'
                }, 
                {
                label: 'Durability', 
                tag: 'impt_dur'
                }, 
                {
                label: 'Screen share', 
                tag: 'impt_scsh'
                }, 
                {
                label: 'Low cost', 
                tag: 'impt_lco'
                }, 
                {
                label: 'Remote control of display', 
                tag: 'impt_rem'
                }
                ]
                }
                ];
            
            let currentQuestion = -1;
            let userAnswers = new Array(questions.length).fill(null);
            let matchedProducts = [...products];
            let userSelectedProducts = {};

            function loadChooserComponent() {
                document.getElementById('help_choose_body').innerHTML = `
                <div class="help-choose-content-box container mb-4">
                    <div class="questions-section text-center container py-4">
                        <h2 class="samsung-h2 my-2" id="question"></h2>
                        <form class="samsung-p container text-left py-2" id="options" style="max-width:500px;"></form>
                        <div class="buttons-section container d-flex flex-wrap justify-content-between">
                            <button class="samsung-p prev-btn btn btn-dark my-1" id="prevButton"">Previous</button>
                            <button class="samsung-p next-btn btn btn-dark my-1" id="nextButton" disabled>Next</button>
                            <button class="samsung-p result-btn btn btn-primary my-1" id="resultButton"" style="display:none;">Result</button>
                        </div>
                    </div>
                </div>
    
                <div class="help-choose-content-box container">
                    <div class="product-count-section container text-center" style="max-width:fit-content;">
                        <h2 class="samsung-h2 pt-3">Total products remaining</h2>
                        <p class="product-count samsung-p" id="productCount"></p>
                    </div>
                </div>`;
            };

            function loadResultComponent() {
                document.getElementById('help_choose_body').innerHTML = `
                <div class="swiper mySwiper help-choose-content-box container mb-4">
                    <div class="container text-center">
                        <h2 class="samsung-h2">Result</h2>
                        <button id="resetButton" class="samsung-p reset-btn btn btn-link">Restart</button>
                    </div>
                    <div class="swiper-wrapper" id="matchedProducts"></div>
                    <div class="container">
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="help-choose-content-box container py-4 user-details" id="userDetailsForm"></div>`;
            };
    
            function loadQuestion() {
                const questionElement = document.getElementById('question');
                const current = questions[currentQuestion];

                // Display question and options
                questionElement.innerHTML = "";
                questionElement.textContent = current.question;
                if (current.hint) {
                    questionElement.innerHTML += `<span class="ml-2 hint-btn btn btn-dark" data-placement="top" data-toggle="popover" data-content="${current.hint}">?</span>`;
                }
            };

            function loadOptionsToQuestion() {
                const optionsForm = document.getElementById('options');
                const current = questions[currentQuestion];

                optionsForm.innerHTML = "";
                // Add options
                current.options.forEach(option => {
                    // console.log(matchedProducts.filter(product => product.tags.includes(option.tag)).length);
                    optionsForm.innerHTML += `
                        <input type="radio" name="option" value="${option.tag}" id="${option.tag}" class="mr-2">
                        <label for="${option.tag}" class="mr-1">${option.label}</label>
                        ${option.hint ? `<span class="hint-btn btn btn-dark" data-placement="top" data-toggle="popover" data-content="${option.hint}">?</span>` : ""}
                        <br>
                    `;
                });

                let inputs = optionsForm.querySelectorAll('input[type="radio"]');

                // Check the radio input if the user has already answered the question
                if (userAnswers[currentQuestion]) {
                    inputs.forEach(input => {
                        if (input.value === userAnswers[currentQuestion]) {
                            input.checked = true;
                            
                        }
                    });
                }

                // Add event listener to radio inputs
                inputs.forEach(input => {
                    input.onchange = function() {
                        userAnswers[currentQuestion] = input.value;
                        matchedProducts = [];
                        let localCollection = products;
                        for (let i = 0; i < userAnswers.length; i++) {
                            if (userAnswers[i]) {
                                localCollection = localCollection.filter(product => product.tags.includes(userAnswers[i]));
                            }
                        }
                        matchedProducts = localCollection;
                        if (currentQuestion < questions.length - 1 && matchedProducts.length > 3) {
                            document.getElementById('nextButton').style.display = 'inline-block';
                            document.getElementById('nextButton').disabled = false;
                            document.getElementById('resultButton').style.display = 'none';
                        } else if (matchedProducts.length < 1) {
                            document.getElementById('nextButton').disabled = true;
                            document.getElementById('nextButton').style.display = 'inline-block';
                            document.getElementById('resultButton').style.display = 'none';
                        } else {
                            // Check if it's the last question and show the result button
                            const selectedOption = userAnswers[currentQuestion];
                            if (selectedOption && matchedProducts.length > 0) {
                                document.getElementById('resultButton').style.display = 'inline-block';
                                document.getElementById('nextButton').style.display = 'none';
                            }
                        }
                        document.getElementById('productCount').textContent = matchedProducts.length;
                    }

                    if (matchedProducts.filter(product => product.tags.includes(input.value)).length < 1) {
                        input.disabled = true;
                    }
                });

                // Initialize popovers for hints
                hintBtnInit();
                // Show or hide previous/next buttons based on current question
                buttonsInit();
            };

            function nextQuestion() {
                // reset the popover block if any
                removePopover();
                
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    loadQuestion();
                    loadOptionsToQuestion();
                }
            }

            function prevQuestion() {
                // reset the popover block if any
                removePopover();
                    
                currentQuestion--;
                if (currentQuestion >= 0) {
                    // Update userAnswers
                    userAnswers[currentQuestion + 1] = null;
                    userAnswers[currentQuestion] = null;

                    // Uncheck the options of forward questions
                    for (let i = currentQuestion + 1; i < questions.length; i++) {
                        const optionsForm = document.getElementById('options');
                        const radioInputs = optionsForm.querySelectorAll('input[type="radio"]');
                        radioInputs.forEach(input => {
                            input.checked = false;
                        });
                    }

                    // Filter products based on user's answers starting from the first answer by tree traversal
                    matchedProducts = [];
                    let localCollection = products;
                    for (let i = 0; i <= currentQuestion; i++) {
                        if (userAnswers[i]) {
                            localCollection = localCollection.filter(product => product.tags.includes(userAnswers[i]));
                        }
                    }
                    matchedProducts = localCollection;
                    document.getElementById('productCount').textContent = matchedProducts.length;

                    loadQuestion();
                    loadOptionsToQuestion();

                    // nextButton.style.display = 'inline-block';
                    // nextButton.disabled = true;

                    // if (matchedProducts.length > 3) {
                    //     nextButton.style.display = 'inline-block';
                    //     nextButton.disabled = false;
                    //     resultButton.style.display = 'none';
                    // } else {
                    //     nextButton.disabled = true;
                    //     nextButton.style.display = 'inline-block';
                    //     resultButton.style.display = 'none';
                    // }
                }
            };

            function userDetailsForm() {
                const userDetailsForm = document.getElementById('userDetailsForm');
                userDetailsForm.innerHTML = '';
                userDetailsForm.innerHTML += `
                    <div class="user-title text-center py-4">
                        <h2 class="samsung-h2">Enter your details below and we will get back to you shortly</h2>
                    </div>
                    <form class="samsung-p container" id="formLFD" style="max-width: 900px;">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>First name<span class="asterisk-imp">*</span></label>
                                <input id="firstName" type="text" placeholder="ex: Enter First name" name="firstName" class="form-control" required>
                                <p class="invalid-feedback">This is not valid.</p>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Last name<span class="asterisk-imp">*</span></label>
                                <input id="lastName" type="text" placeholder="ex: Enter Last name" name="lastName" class="form-control" required>
                                <p class="invalid-feedback">This is not valid.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Email<span class="asterisk-imp">*</span></label>
                                <input id="email" type="email" placeholder="ex: example@example.com" name="email" class="form-control" required>
                                <p class="invalid-feedback">This is not valid.</p>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Phone number<span class="asterisk-imp">*</span></label>
                                <input id="phonePersonal" type="tel" name="phone" placeholder="ex: 0221761322" pattern="[0-9]{9,14}" class="form-control" required>
                                <p class="invalid-feedback">This is not valid.</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Business name<span class="asterisk-imp">*</span></label>
                            <input id="businessName" type="text" placeholder="ex: Business name" name="businessName" class="form-control" required>
                            <p class="invalid-feedback">This is not valid.</p>
                        </div>
                        <div class="form-group">
                            <label>Business address</label>
                            <input id="businessAddress" type="text" placeholder="ex: Business address" name="businessAddress" class="form-control">
                            <p class="invalid-feedback">This is not valid.</p>
                        </div>
                        <div class="form-group">
                            <label>Business contact number</label>
                            <input id="phoneBusiness" type="tel" placeholder="ex: 0221761322" pattern="[0-9]{9,14}" name="phone" class="form-control">
                            <p class="invalid-feedback">This is not valid.</p>
                        </div>
                        <div class="form-group">
                            <label>Preferred reseller</label>
                            <input id="preferredReseller" type="text" placeholder="ex: preferred reseller" name="preferredReseller" class="form-control">
                            <p class="invalid-feedback">This is not valid.</p>
                        </div>
                        <div class="pt-3">
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="acceptTerms" id="acceptTerms" required> <span class="asterisk-imp">*</span> I have read and agree to the <a href="#">Samsung Privacy Policy</a>
                                <div class="invalid-feedback">Check this checkbox to continue.</div>
                                </label>
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="receiveEmails" id="receiveEmails"> I would like to receive information about products, services, promotions and marketing communications of Samsung and or its partners.
                                </label>
                            </div>
                        </div>
                        <div class="g-recaptcha" data-sitekey="6LcWd8kpAAAAAATvFS2MwSKsifNs0sZraofuwb8H"></div>
                        <div class="text-center pt-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                `;
                // load recaptcha script
                const script = document.createElement('script');
                script.src = 'https://www.google.com/recaptcha/api.js';
                script.async = true;
                document.body.appendChild(script);

                // validate inputs
                const firstName = document.getElementById('firstName');
                const lastName = document.getElementById('lastName');
                const email = document.getElementById('email');
                const phonePersonal = document.getElementById('phonePersonal');
                const businessName = document.getElementById('businessName');
                const acceptTerms = document.getElementById('acceptTerms');
                // const form = document.getElementById('formLFD');

                var emailValidator = /^(?!\d+@)([a-zA-Z0-9\+_\-]+)(\.[a-zA-Z0-9\+_\-]+)*@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,24}$/;
                var mobileValidator = /^\d{9,14}$/;

                firstName.addEventListener('change', () => {
                    validateFirstName();
                    firstName.addEventListener('input', () => {
                        validateFirstName();
                    });
                });

                function validateFirstName() {
                    let firstNameValue = firstName.value.trim();
                    if (firstNameValue) {
                        if (firstNameValue.length < 2) {
                            firstName.nextElementSibling.innerHTML = 'First name must be at least 2 characters';
                            firstName.classList.add('is-invalid');
                            return false;
                        } else if (firstNameValue.length > 30) {
                            firstName.nextElementSibling.innerHTML = 'First name must be less than 30 characters';
                            firstName.classList.add('is-invalid');
                            return false;
                        } else {
                            firstName.nextElementSibling.innerHTML = '';
                            firstName.classList.remove('is-invalid');
                            return true;
                        }
                    } else {
                        firstName.nextElementSibling.innerHTML = 'Enter a valid first name';
                        firstName.classList.add('is-invalid');
                        return false;
                    }
                }

                lastName.addEventListener('change', () => {
                    validateLastName();
                    lastName.addEventListener('input', () => {
                        validateLastName();
                    });
                });

                function validateLastName() {
                    let lastNameValue = lastName.value.trim();
                    if (lastNameValue) {
                        if (lastNameValue.length < 2) {
                            lastName.nextElementSibling.innerHTML = 'Last name must be at least 2 characters';
                            lastName.classList.add('is-invalid');
                            return false;
                        } else if (lastNameValue.length > 30) {
                            lastName.nextElementSibling.innerHTML = 'Last name must be less than 30 characters';
                            lastName.classList.add('is-invalid');
                            return false;
                        } else {
                            lastName.nextElementSibling.innerHTML = '';
                            lastName.classList.remove('is-invalid');
                            return true;
                        }
                    } else {
                        lastName.nextElementSibling.innerHTML = 'Enter a valid last name';
                        lastName.classList.add('is-invalid');
                        return false;
                    }
                }

                email.addEventListener('change', () => {
                    validateEmail();
                    email.addEventListener('input', () => {
                        validateEmail();
                    });
                });

                function validateEmail() {
                    let emailValue = email.value.trim();
                    if (emailValue) {
                        if (!emailValidator.test(emailValue)) {
                            email.nextElementSibling.innerHTML = 'Enter a valid email address';
                            email.classList.add('is-invalid');
                            return false;
                        } else {
                            email.nextElementSibling.innerHTML = '';
                            email.classList.remove('is-invalid');
                            return true;
                        }
                    } else {
                        email.nextElementSibling.innerHTML = 'Enter a valid email address';
                        email.classList.add('is-invalid');
                        return false;
                    }
                }

                phonePersonal.addEventListener('change', () => {
                    validatePhonePersonal();
                    phonePersonal.addEventListener('input', () => {
                        validatePhonePersonal();
                    });
                });

                function validatePhonePersonal() {
                    let phonePersonalValue = phonePersonal.value.trim();
                    if (phonePersonalValue) {
                        if (!mobileValidator.test(phonePersonalValue)) {
                            phonePersonal.nextElementSibling.innerHTML = 'Enter a valid phone number';
                            phonePersonal.classList.add('is-invalid');
                            return false;
                        } else {
                            phonePersonal.nextElementSibling.innerHTML = '';
                            phonePersonal.classList.remove('is-invalid');
                            return true;
                        }
                    } else {
                        phonePersonal.nextElementSibling.innerHTML = 'Enter a valid phone number';
                        phonePersonal.classList.add('is-invalid');
                        return false;
                    }
                }

                businessName.addEventListener('change', () => {
                    validateBusinessName();
                    businessName.addEventListener('input', () => {
                        validateBusinessName();
                    });
                });

                function validateBusinessName() {
                    let businessNameValue = businessName.value.trim();
                    if (businessNameValue) {
                        if (businessNameValue.length < 2) {
                            businessName.nextElementSibling.innerHTML = 'Business name must be at least 2 characters';
                            businessName.classList.add('is-invalid');
                            return false;
                        } else if (businessNameValue.length > 30) {
                            businessName.nextElementSibling.innerHTML = 'Business name must be less than 30 characters';
                            businessName.classList.add('is-invalid');
                            return false;
                        } else {
                            businessName.nextElementSibling.innerHTML = '';
                            businessName.classList.remove('is-invalid');
                            return true;
                        }
                    } else {
                        businessName.nextElementSibling.innerHTML = 'Enter a valid business name';
                        businessName.classList.add('is-invalid');
                        return false;
                    }
                }

                acceptTerms.addEventListener('change', () => {
                    validateAcceptTerms();
                    acceptTerms.addEventListener('input', () => {
                        validateAcceptTerms();
                    });
                });

                function validateAcceptTerms() {
                    if (acceptTerms.checked) {
                        acceptTerms.nextSibling.innerHTML = '';
                        acceptTerms.classList.remove('is-invalid');
                        return true;
                    } else {
                        acceptTerms.nextSibling.innerHTML = 'Check this checkbox to continue';
                        acceptTerms.classList.add('is-invalid');
                        return false;
                    }
                }
                
                
                const formLFD = document.getElementById('formLFD');
                formLFD.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    let isValid = true;
                    isValid = validateFirstName();
                    isValid = validateLastName() && isValid;
                    isValid = validateEmail() && isValid;
                    isValid = validatePhonePersonal() && isValid;
                    isValid = validateBusinessName() && isValid;
                    isValid = validateAcceptTerms() && isValid;

                    if (isValid) {
                        // Get the recaptcha response
                        const recaptchaResponse = grecaptcha.getResponse();
                        if (!recaptchaResponse) {
                            alert('Please complete the reCAPTCHA validation');
                            return;
                        }

                        const userDetails = {
                            first_name: firstName.value,
                            last_name: lastName.value,
                            email: email.value,
                            phone: phonePersonal.value,
                            business_name: businessName.value,
                            business_address: businessAddress.value,
                            business_phone: phoneBusiness.value,
                            preferred_reseller: preferredReseller.value,
                            acceptTerms: acceptTerms.checked,
                            receiveEmails: receiveEmails.checked,
                            customer_selected_skus: Object.keys(userSelectedProducts).join(','),
                            customer_answers: userAnswers.filter(answer => answer !== null).join(','),
                            sku_results: matchedProducts.map(product => product.sku).join(','),
                            recaptcha_response: recaptchaResponse
                        };

                        // console.log(userDetails);
                        
                        // do a fetch reqest to the backend on the same domain

                        fetch('/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userDetails)
                        })
                        .then(response => response.text())
                        .then(data => {
                            // console.log(data);

                            if(data.includes('error')) {
                                console.log(data);
                                alert('There was an error submitting your form. Please try again later.');
                                return;
                            }
                            if(data.includes('success')) {
                                // alert('Your form was submitted successfully. We will get back to you shortly.');
                                // Clear the form
                                formLFD.reset();
                                let helpChoose = document.getElementById('help_choose_body');
                                helpChoose.innerHTML = '';
                                helpChoose.innerHTML = `
                                    <div class="help-choose-content-box container py-5 text-center">
                                        <h2 class="samsung-h2">Thank you</h2>
                                        <p class="samsung-p">A Samsung representative will get back to you shortly.</p>
                                        <button id="resetButton" class="mt-4 samsung-p reset-btn btn btn-link">Restart</button>
                                    </div>
                                `;
                                let resetButton = document.getElementById('resetButton');
                                resetButton.onclick = () => { resetChooser(); };
                            }

                        })
                    }
                })

            };

            function showResults() {
                // reset the popover block
                removePopover();
                
                document.getElementById('help_Choose_Header_Body').textContent = "Fill up the form below your results and click on submit.";

                loadResultComponent();
                swiperInit();

                let resetButton = document.getElementById('resetButton');
                resetButton.onclick = () => { resetChooser(); };

                const matchedProductsDiv = document.getElementById('matchedProducts');
                matchedProductsDiv.innerHTML = '';

                if (matchedProducts.length > 0) {
                    matchedProducts.forEach(product => {
                        matchedProductsDiv.innerHTML += `
                        <div class="swiper-slide">
                            <div class="product d-flex flex-column align-items-center justify-content-center py-5">
                                <img src="${product.img}" alt="${product.name}" style="width: 80%;">
                                <h2 class="samsung-h2 mt-2">${product.name}</h2>
                                <p class="samsung-p">SKU: ${product.sku}</p>
                                <ul class="my-3">
                                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                                </ul>
                                <a href="#"><button class="prev-btn btn btn-dark my-3">Learn More</button></a>
                                <div class="form-group form-check">
                                    <label class="samsung-p form-check-label" for="${product.sku}">
                                        <input class="form-check-input" type="checkbox" name="wantToKnowMore" value="${product.sku}" id="${product.sku}">
                                        Want to know more about this product?
                                    </label>
                                </div>
                            </div>
                        </div>`;
                    });

                    let wantToKnowMoreCheckboxChange = document.getElementsByName('wantToKnowMore');
                    wantToKnowMoreCheckboxChange.forEach(checkbox => {
                        checkbox.onchange = function() {
                            if (checkbox.checked) {
                                userSelectedProducts[checkbox.value] = true;
                                // console.log(userSelectedProducts);
                            } else {
                                delete userSelectedProducts[checkbox.value];
                                // console.log(userSelectedProducts);
                            }
                        };
                    });

                    userDetailsForm();
                } else {
                    matchedProductsDiv.style.display = 'none';
                }
            };

            

            function buttonsInit() {
                let nextButton = document.getElementById('nextButton');
                let prevButton = document.getElementById('prevButton');
                let resultButton = document.getElementById('resultButton');

                nextButton.onclick = () => {
                    nextQuestion();
                };

                prevButton.onclick = () => {
                    prevQuestion();
                };

                resultButton.onclick = () => {
                    showResults();
                };

                // Show or hide previous/next buttons based on current question
                prevButton.style.opacity = currentQuestion <= 0 ? 0 : 1;
                nextButton.disabled = currentQuestion < questions.length - 1 && userAnswers[currentQuestion] ? false : true;
                resultButton.style.display = currentQuestion === questions.length - 1 && userAnswers[currentQuestion] ? 'inline-block' : 'none';

                
            };

            function swiperInit() {
                var swiper = new Swiper(".mySwiper", {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    allowTouchMove: false,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        768: {
                        slidesPerView: 2,
                        },
                        1024: {
                        slidesPerView: 3,
                        },
                    },
                });
            }
            
            function hintBtnInit() {
                let hintBtn = document.querySelectorAll('.hint-btn');
                if (hintBtn) {
                    hintBtn.forEach(btn => {
                        btn.onclick = function() {
                            if (btn.innerHTML === "?") {
                                // Hide popovers of other buttons
                                $('.hint-btn').not(btn).popover('hide');

                                // Reset all buttons to "?"
                                hintBtn.forEach(otherBtn => {
                                    if (otherBtn !== btn) {
                                        otherBtn.innerHTML = "?";
                                        otherBtn.style.background = "#F6F6F6";
                                        otherBtn.style.color = "#000";
                                    }
                                });

                                btn.innerHTML = "x";
                                btn.style.background = "#000";
                                btn.style.color = "#fff";
                            } else {
                                btn.innerHTML = "?";
                                btn.style.background = "#F6F6F6";
                                btn.style.color = "#000";
                            }
                        }
                    });
                }
                
                $('.hint-btn').popover({
                    placement: "top"
                });
            }

            function removePopover() {
                let popover = document.getElementsByClassName('popover');
                if (popover.length > 0) {
                    popover[0].remove();
                }
            }

            function startChooserQueries() {
                currentQuestion = 0;
                userAnswers = new Array(questions.length).fill(null);
                matchedProducts = [...products];
                userSelectedProducts = {};
                document.getElementById('help_Choose_Header_Body').textContent = "Select the choice that best suits your requirements.";
                loadChooserComponent();
                loadQuestion();
                loadOptionsToQuestion();
                document.getElementById('productCount').textContent = matchedProducts.length;
            }

            function resetChooser() {                
                startChooserQueries();
            };

            // start the survey when the page loads
            window.onload = () => { startChooserQueries(); };

        }) ();