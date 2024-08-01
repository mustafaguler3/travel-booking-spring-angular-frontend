// For Add or Remove Flight Multi City Option Start
$(document).ready(function () {
    $("#addMulticityRow").on('click', (function () {
        let a = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

        if (document.querySelectorAll('.multi_city_form').length === 5) {
            alert("Max Citry Limit Reached!!")
            return;
        }
        $(".multi_city_form_wrapper").append(`
        
        <div class="multi_city_form">
        <div class="row">
            <div class="col-lg-12">
                <div class="multi_form_remove">
                    <button type="button"
                        id="remove_multi_city">Remove</button>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="flight_Search_boxed">
                    <p>From</p>
                    <input type="text" value="New York">
                    <span>DAC, Hazrat Shahajalal
                        International...</span>
                    <div class="plan_icon_posation">
                        <i class="fas fa-plane-departure"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="flight_Search_boxed">
                    <p>To</p>
                    <input type="text" value="London ">
                    <span>CXB, London  Airport</span>
                    <div class="plan_icon_posation">
                        <i class="fas fa-plane-arrival"></i>
                    </div>
                    <div class="range_plan">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="form_search_date">
                    <div
                        class="flight_Search_boxed date_flex_area">
                        <div class="Journey_date">
                            <p>Journey date</p>
                            <input type="date" value="2022-05-18">
                            <span>Thursday</span>
                        </div>
                        <div class="Journey_date">
                            <p>Return date</p>
                            <input type="date" value="2022-05-20">
                            <span>Saturday</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2  col-md-6 col-sm-12 col-12">
            <div
                class="flight_Search_boxed dropdown_passenger_area">
                <p>Passenger, Class </p>
                <div class="dropdown">
                    <button
                        class="dropdown-toggle final-count"
                        data-toggle="dropdown" type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        0 Passenger
                    </button>
                    <div class="dropdown-menu dropdown_passenger_info"
                        aria-labelledby="dropdownMenuButton1">
                        <div
                            class="traveller-calulate-persons">
                            <div class="passengers">
                                <h6>Passengers</h6>
                                <div
                                    class="passengers-types">
                                    <div
                                        class="passengers-type">
                                        <div class="text">
                                            <span
                                                class="count pcount">2</span>
                                            <div
                                                class="type-label">
                                                <p>Adult</p>
                                                <span>12+
                                                    yrs</span>
                                            </div>
                                        </div>
                                        <div
                                            class="button-set">
                                            <button
                                                type="button"
                                                class="btn-add">
                                                <i
                                                    class="fas fa-plus"></i>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn-subtract">
                                                <i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        class="passengers-type">
                                        <div class="text">
                                            <span
                                                class="count ccount">0</span>
                                            <div
                                                class="type-label">
                                                <p
                                                    class="fz14 mb-xs-0">
                                                    Children
                                                </p><span>2
                                                    - Less
                                                    than 12
                                                    yrs</span>
                                            </div>
                                        </div>
                                        <div
                                            class="button-set">
                                            <button
                                                type="button"
                                                class="btn-add-c">
                                                <i
                                                    class="fas fa-plus"></i>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn-subtract-c">
                                                <i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        class="passengers-type">
                                        <div class="text">
                                            <span
                                                class="count incount">0</span>
                                            <div
                                                class="type-label">
                                                <p
                                                    class="fz14 mb-xs-0">
                                                    Infant
                                                </p><span>Less
                                                    than 2
                                                    yrs</span>
                                            </div>
                                        </div>
                                        <div
                                            class="button-set">
                                            <button
                                                type="button"
                                                class="btn-add-in">
                                                <i
                                                    class="fas fa-plus"></i>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn-subtract-in">
                                                <i
                                                    class="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cabin-selection">
                                <h6>Cabin Class</h6>
                                <div class="cabin-list">
                                    <button type="button"
                                        class="label-select-btn">
                                        <span
                                            class="muiButton-label">Economy
                                        </span>
                                    </button>
                                    <button type="button"
                                        class="label-select-btn active">
                                        <span
                                            class="muiButton-label">
                                            Business
                                        </span>
                                    </button>
                                    <button type="button"
                                        class="label-select-btn">
                                        <span
                                            class="MuiButton-label">First
                                            Class </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span>Business</span>
            </div>
        </div>
        </div>
    </div>
        `);

    }))
    // Remove Button Click 
    $(document).on('click', (function (e) {
        if (e.target.id === "remove_multi_city") {
            $(e.target).parent().closest('.multi_city_form').remove()
        }
    })

    )

});