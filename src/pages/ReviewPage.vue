<script setup></script>

<template>
    <section class="review-page">
        <div class="review-page__heading">
            <h1>Here's a word from our customers.</h1>
        </div>
        <div class="review-page__container">
            <div class="review-page__container__box">
                <div class="review-page__container__box__top">
                    <div class="review-page__container__box__top-profile">
                    <div class="review-page__container__box__top-profile-img">
                        <img src="/images/userimg.jpg" alt="user profile picture" />
                    </div>
                    <div class="review-page__container__box__top-profile-username">
                        <strong>Customer #1</strong>
                    </div>
                    </div>
                     <div class="review-page__container__box__top-review">
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                        <div class="review-page__container__box__top-review__info">
                            <p>I was looking at exchanging my old car for a new one, 
                            I was a bit unsure on what car and what I should do next, but had a lady that was amazing, 
                            explained everything I wanted to know and was very patient with me, leaving as a happy customer.</p>
                        </div>
                     </div>
                </div>

            </div>
        </div>

        <div class="review-page__container">
            <div class="review-page__container__box">
                <div class="review-page__container__box__top">
                    <div class="review-page__container__box__top-profile">
                    <div class="review-page__container__box__top-profile-img">
                        <img src="/images/userimg.jpg" alt="user profile picture" />
                    </div>
                    <div class="review-page__container__box__top-profile-username">
                        <strong>Customer #2</strong>
                    </div>
                    </div>
                     <div class="review-page__container__box__top-review">
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                        <div class="review-page__container__box__top-review__info">
                            <p>Travelled a distance to see / buy a car. 
                            There were a few things that needed to be sorted but the guys went out of their way to organise this 
                            before I left. Brilliant service 👍</p>
                        </div>
                     </div>
                </div>

            </div>
        </div>

        <div class="review-page__container">
            <div class="review-page__container__box">
                <div class="review-page__container__box__top">
                    <div class="review-page__container__box__top-profile">
                    <div class="review-page__container__box__top-profile-img">
                        <img src="/images/userimg.jpg" alt="user profile picture" />
                    </div>
                    <div class="review-page__container__box__top-profile-username">
                        <strong>Customer #3</strong>
                    </div>
                    </div>
                     <div class="review-page__container__box__top-review">
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' color='#00003c' ></box-icon>
                        <div class="review-page__container__box__top-review__info">
                            <p>Carshop Wakefield. Excellent customer service. 
                            Salesman was very efficient and respectful when buying my vehicle. Very satisfied.</p>
                        </div>
                     </div>
                </div>

            </div>
        </div>

        <div class="review-page__container">
            <div class="review-page__container__box">
                <div class="review-page__container__box__top">
                    <div class="review-page__container__box__top-profile">
                    <div class="review-page__container__box__top-profile-img">
                        <img src="/images/userimg.jpg" alt="user profile picture" />
                    </div>
                    <div class="review-page__container__box__top-profile-username">
                        <strong>Customer #4</strong>
                    </div>
                    </div>
                     <div class="review-page__container__box__top-review">
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star-half' type='solid' color='#00003c' ></box-icon>
                            <box-icon name='star' color='#00003c' ></box-icon>
                        <div class="review-page__container__box__top-review__info">
                            <p>Thanks to the team for their professionalism in completing my recent car purchase.
                            I bought a Mini Cooper 7 online without viewing it as I live 150 miles away.
                            I viewed a detailed video and paid for car.
                            When the car was delivered it was as described and I was more than satisfied.
                            The whole experience was different and a bit worrying, out of my comfort zone, 
                            but it all turned out okay in the end. Thanks again.</p>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
.review-page {
    font-family: var(--font-style);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
&__heading {
    color: var(--color-dark);
    letter-spacing: 1px;
    padding: 10px 20px;
    margin: 30px 0px;
    font-size: 2.0rem;
    font-weight: 500;
    @media(max-width: 790px){
        font-size: 1.4rem;
        }
}

&__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    &__box {
        width: 500px;
        box-shadow: 2px 2px 20px var(--color-dark);
        background-color: var(--pure-white);
        padding: 20px;
        margin: 15px;
        cursor: pointer;
        @media(max-width: 1060px){
            width: 50%;
            padding: 10px;
        }
        @media(max-width: 790px){
            width: 100%;
        }
        &:hover {
            transform: translateY(-10px);
            transition: all ease 0.3s;
        }
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            @media(max-width: 340px){
                flex-wrap: wrap;
                margin-bottom: 10px;
            }
        &-profile {
            display: flex;
            align-items: center;
            &-img {
                width: 50px;
                height: 50px;
                border-radius: var(--border-radius);
                overflow: hidden;
                margin-right: 10px;
            }
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
            &-username {
                display: flex;
                flex-direction: column;
                padding: 4px;
            & strong {
                color: var(--pure-black);
                font-size: 1.1rem;
                letter-spacing: 0.5px;
            }}
        &-review__info{
            @media(max-width: 340px){
                margin-top: 10px;
            }
        & p{
            font-size: 0.9rem;
            color: var(--color-dark);
        }
        }
    }  
    }
}}}
    
</style>