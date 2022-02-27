let pricingTable = [
    {
        pkgName: "Regular",
        pkgPrice: 25000,
        showRibbon: false,
        features: [
            {
                featureName: "Unlimited Comm. Segmentation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Data",
                featureStatus: true
            },
            {
                featureName: "Comm. History Report",
                featureStatus: true
            },
            {
                featureName: "Comm. Accessible: 60 days",
                featureStatus: true
            },
            {
                featureName: "Unlimited Comm. FollowUp",
                featureStatus: false
            },
            {
                featureName: "Unlimited Customer Importation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Offline-Online Customer Co-relation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Customer Segmentation",
                featureStatus: false
            },
            {
                featureName: "Advanced Mobile no & Email Address finder",
                featureStatus: false
            },
            {
                featureName: "Unlimited Order Creation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Product Creation with import/export facilites",
                featureStatus: false
            },
            {
                featureName: "Customized Invoice generation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Leads Creation",
                featureStatus: false
            },
            {
                featureName: "Leads will expire after 365 days",
                featureStatus: false
            },
            {
                featureName: "Real-Time Dashboard",
                featureStatus: false
            },
            {
                featureName: "Team Building Reports: User Activity Log, SLA",
                featureStatus: false
            },
            {
                featureName: "Strategy Supervision with Analyst",
                featureStatus: false
            }
        ]
    },
    {
        pkgName: "Growth",
        pkgPrice: 45000,
        showRibbon: true,
        features: [
            {
                featureName: "Unlimited Comm. Segmentation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Data",
                featureStatus: true
            },
            {
                featureName: "Comm. History Report",
                featureStatus: true
            },
            {
                featureName: "Comm. Accessible: 180 days",
                featureStatus: true
            },
            {
                featureName: "Unlimited Comm. FollowUp",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Importation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Offline-Online Customer Co-relation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Customer Segmentation",
                featureStatus: true
            },
            {
                featureName: "Advanced Mobile no & Email Address finder",
                featureStatus: true
            },
            {
                featureName: "Unlimited Order Creation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Product Creation with import/export facilites",
                featureStatus: true
            },
            {
                featureName: "Customized Invoice generation",
                featureStatus: false
            },
            {
                featureName: "Unlimited Leads Creation",
                featureStatus: true
            },
            {
                featureName: "Leads will expire after 180 days",
                featureStatus: true
            },
            {
                featureName: "Real-Time Dashboard",
                featureStatus: true
            },
            {
                featureName: "Team Building Reports: User Activity Log, SLA",
                featureStatus: true
            },
            {
                featureName: "Strategy Supervision with Analyst",
                featureStatus: false
            }
        ]
    },
    {
        pkgName: "Power",
        pkgPrice: 70000,
        showRibbon: false,
        features: [
            {
                featureName: "Unlimited Comm. Segmentation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Data",
                featureStatus: true
            },
            {
                featureName: "Comm. History Report",
                featureStatus: true
            },
            {
                featureName: "Comm. Accessible: 365 days",
                featureStatus: true
            },
            {
                featureName: "Unlimited Comm. FollowUp",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Importation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Offline-Online Customer Co-relation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Customer Segmentation",
                featureStatus: true
            },
            {
                featureName: "Advanced Mobile no & Email Address finder",
                featureStatus: true
            },
            {
                featureName: "Unlimited Order Creation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Product Creation with import/export facilites",
                featureStatus: true
            },
            {
                featureName: "Customized Invoice generation",
                featureStatus: true
            },
            {
                featureName: "Unlimited Leads Creation",
                featureStatus: true
            },
            {
                featureName: "Leads will expire after 365 days",
                featureStatus: true
            },
            {
                featureName: "Real-Time Dashboard",
                featureStatus: true
            },
            {
                featureName: "Team Building Reports: User Activity Log, SLA, Performance Analytics, Issue Analytics, Advanced Comm. Report",
                featureStatus: true
            },
            {
                featureName: "Strategy Supervision with Analyst",
                featureStatus: true
            }
        ]
    }
]

jQuery(document).ready(function () {


    function displayPrining() {
        let htmlelement = "";
        for (pricing of pricingTable) {
            htmlelement = htmlelement + "<div class='pkg-box'>";
            htmlelement = htmlelement + "<div class='pricing-header'> <button>Upgrade</button>";
            if (pricing.showRibbon) {
                htmlelement = htmlelement + "<div class='ribbon showRibbon'>Popular</div>";
            } else {
                htmlelement = htmlelement + "<div class='ribbon'>Recommended</div>";
            }
            htmlelement = htmlelement + `<h2> ${pricing.pkgName} </h2>
                                        <p><span class="currency-sign">৳</span> <span class="pkg-price">${pricing.pkgPrice}</span> <span class="duration">/month</span></p></div>`;
            htmlelement = htmlelement + "<div class='pricing-features'><ul>";
            let i = 0;
            for (const feature of pricing.features) {
                i++;
                if (!feature.featureStatus) {
                    htmlelement = htmlelement + "<li class='feature-" + i + " del'> <i></i>  <span class='value'> " + feature.featureName + "</span> <span class='editor'></span></li>";
                } else {
                    htmlelement = htmlelement + "<li class='feature-" + i + "'> <i></i> <span class='value'> " + feature.featureName + "</span><span class='editor'></span></li>";
                }

            }
            htmlelement = htmlelement + "</ul></div>";
            htmlelement = htmlelement + "</div>";
        }
        $(".table-wrapper").html(htmlelement);

    }

    if (sessionStorage.getItem("login")) {
        jQuery(".heading").slideDown();
        displayPrining();
    }


    $(".pricing-features>ul>li>i").on("click", function (e) {
        if ($(this).parents("li").hasClass("del")) {
            $(this).parents("li").removeClass("del");
        } else {
            $(this).parents("li").addClass("del");
        }
    });
    $(".table-wrapper .pricing-header button").on("click", function () {
        $(this).parents(".pkg-box").toggleClass("show-option");
    })
    $(".pricing-features>ul>li>span.value").on("click", function () {

        let currentValue = $(this).text();
        let editData = `
                <input type="text" value="${currentValue}"><button class="button">save</button>
            `;

        $(this).siblings('span').show().html(editData);
        $(this).parents("li").addClass("editing");
        $(this).hide();
    });
    $(".pricing-features>ul>li>span.editor").on("click", function (e) {
        let newValue = $(this).children("input").val();
        if (e.target.nodeName == "BUTTON" && newValue !== "") {
            $(this).hide();
            $(this).siblings("span").show().html(newValue);
            $(this).parents("li").removeClass("editing");
        }
    })

    let pkgOptions = `<div class='pkg-options'>  
    <form class="updatePkg" action="">
        <div class="update-pkg-name">
            <label for="pkg-name">Pkg name</label>
            <input id="pkg-name" type="text" name="pkgName">
        </div>
        <div class="update-pkg-price">
            <div>
                <label for="pkg-currency">ccy.</label>
                <input id="pkg-currency" type="text" value="৳" name="pkgCurrency">
             </div>
             <div>
                <label for="pkg-price">Pkg Price</label>
                <input id="pkg-price" type="number" name="pkgPrice">
            </div>
            <div>
                <label for="pkg-duration">Duration</label>
                <select id="pkg-duration" type="text"  name="pkgDuration">
                    <option value="month">Month</option>
                    <option value="year">Year </option>
                </select>
<!--                <input id="pkg-duration" type="text" value="month" name="pkgDuration">-->
            </div>
        </div>
        <div>
        <button type="submit">Apply</button>
        </div>
    </form>
    </div>`;

    $(".table-wrapper>div").append(pkgOptions);

    $(".table-wrapper .pkg-options button").on("click", function () {
        $(this).parents(".pkg-box").toggleClass("show-option");
    })
    $('.updatePkg').submit(function (event) {
        var formData = $(this).serializeArray();
        event.preventDefault();
        for (const data of formData) {
            if (data.name == "pkgName" && data.value !== "") {
                $(this).parents(".pkg-box").find(".pricing-header h2").html(data.value)
            } else if (data.name == "pkgCurrency" && data.value !== "") {
                $(this).parents(".pkg-box").find(".pricing-header p span.currency-sign").html(data.value)
            } else if (data.name == "pkgPrice" && data.value !== "") {
                $(this).parents(".pkg-box").find(".pricing-header p span.pkg-price").html(data.value)
            } else if (data.name == "pkgDuration" && data.value !== "") {
                $(this).parents(".pkg-box").find(".pricing-header p span.duration").html("/" + data.value)
            }
        }
    });
})
