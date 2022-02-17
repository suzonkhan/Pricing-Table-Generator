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

    function displayPrining(params) {
        let htmlelement = "";
        for (pricing of pricingTable) {
            htmlelement = htmlelement + "<div class='pkg-box'>";
            htmlelement = htmlelement + "<div class='pricing-header'> <button>Upgrade</button>";
            if (pricing.showRibbon) {
                htmlelement = htmlelement + "<div class='ribbon showRibbon'>Popular</div>";
            } else {
                htmlelement = htmlelement + "<div class='ribbon'>Popular</div>";
            }
            htmlelement = htmlelement + "<h2>" + pricing.pkgName + "</h2><p>৳" + pricing.pkgPrice + "<span>/month</span></p></div>";
            htmlelement = htmlelement + "<div class='pricing-features'><ul>";
            let i = 0;
            for (const feature of pricing.features) {
                i++;
                if (!feature.featureStatus) {
                    htmlelement = htmlelement + "<li class='feature-" + i + " del'><del> <span> " + feature.featureName + "</span></del></li>";
                } else {
                    htmlelement = htmlelement + "<li class='feature-" + i + "'> <span> " + feature.featureName + "</span></li>";
                }

            }
            htmlelement = htmlelement + "</ul></div>";
            htmlelement = htmlelement + "</div>";
        }
        ;
        $(".table-wrapper").append(htmlelement);

    }

    displayPrining();

    $(".pricing-features>ul>li").on("click", function () {
        if ($(this).hasClass("del")) {
            let currentText = $(this).text();
            $(this).html("<span>" + currentText + " </span>");
            $(this).removeClass("del");
        } else {
            $(this).addClass("del");
            $(this).children("span").wrap("<del></del>");
        }
    });
    $(".table-wrapper .pricing-header button").on("click", function () {
        $(this).parents(".pkg-box").toggleClass("show-option");

    })

    let pkgOptions = `<div class='pkg-options'>  
    <form class="updatePkg" action="">
        <div>
            <label for="pkg-name">Pkg name</label>
            <input id="pkg-name" type="text" name="pkgName">
        </div>
        <div>
            <label for="pkg-price">Pkg Price</label>
            <input id="pkg-price" type="text" name="pkgPrice">
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
            } else if (data.name == "pkgPrice" && data.value !== "") {
                $(this).parents(".pkg-box").find(".pricing-header p").html(data.value)
            }
        }
    });
})

