let pricingTable = [
    {
        pkgName: "Starter",
        pkgPrice: 50000,
        showRibbon: false,
        features: [
            {
                featureName: "Users 10",
                featureStatus: true
            },
            {
                featureName: "Users 11",
                featureStatus: true
            },
            {
                featureName: "Users 12",
                featureStatus: true
            },
            {
                featureName: "Users 14",
                featureStatus: true
            },
            {
                featureName: "Users 15",
                featureStatus: true
            },
            {
                featureName: "Users 16",
                featureStatus: true
            }
        ]
    },
    {
        pkgName: "Corporate",
        pkgPrice: 10000,
        showRibbon: true,
        features: [
            {
                featureName: "Users 17",
                featureStatus: true
            },
            {
                featureName: "Users 18",
                featureStatus: true
            },
            {
                featureName: "Users 19",
                featureStatus: true
            },
            {
                featureName: "Users 20",
                featureStatus: true
            },
            {
                featureName: "Users 21",
                featureStatus: true
            },
            {
                featureName: "Users 22",
                featureStatus: true
            }
        ]
    },
    {
        pkgName: "Enterprice",
        pkgPrice: 50000,
        showRibbon: false,
        features: [
            {
                featureName: "Users 17",
                featureStatus: true
            },
            {
                featureName: "Users 18",
                featureStatus: true
            },
            {
                featureName: "Users 19",
                featureStatus: true
            },
            {
                featureName: "Users 20",
                featureStatus: true
            },
            {
                featureName: "Users 21",
                featureStatus: true
            },
            {
                featureName: "Users 22",
                featureStatus: false
            }
        ]
    }
]
jQuery(document).ready(function () {

    function displayPrining(params) {
        let htmlelement = "";
        for (pricing of pricingTable) {
            htmlelement = htmlelement + "<div class='pkg-box'>";
            htmlelement = htmlelement + "<div class='pricing-header'> <button>Click</button>";
            if(pricing.showRibbon ){
                htmlelement = htmlelement + "<div class='ribbon showRibbon'>Popular</div>";
            } else {
                htmlelement = htmlelement + "<div class='ribbon'>Popular</div>";
            }
            htmlelement = htmlelement + "<h2>" + pricing.pkgName + "</h2><p>" + pricing.pkgPrice + "<span> Taka/month</span></p></div>";
            htmlelement = htmlelement + "<div class='pricing-features'><ul>";
            for (const feature of pricing.features) {
                if(!feature.featureStatus){
                    htmlelement = htmlelement + "<li class='del'><del> <span> " + feature.featureName + "</span></del></li>";
                } else {
                    htmlelement = htmlelement + "<li> <span> " + feature.featureName + "</span></li>";
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
        if($(this).hasClass("del")){
            let currentText = $(this).text();
            $(this).html("<span>"+ currentText+" </span>");
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

