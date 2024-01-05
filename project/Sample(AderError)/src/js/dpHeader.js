const hd = document.querySelector('header');
hd.innerHTML +=
    `<div class="logoZone">
        <a href="../index.html" class="logo">
            <img src="../src/img/logo/logo.svg" alt="logo">
        </a>
        </div>
        <ul class="menu">
            <li class="dep1" connect="outer">OUTER
                <ul class="innerMenu">
                    <li class="dep2" connect="jumper">JUMPER</li>
                    <li class="dep2" connect="coat">COAT</li>
                    <li class="dep2" connect="blazer">BLAZER</li>
                </ul>
            </li>
            <li class="dep1" connect="top">TOP
                <ul class="innerMenu">
                    <li class="dep2" connect="shirt">SHIRT</li>
                    <li class="dep2" connect="tShirt">T-SHIRT</li>
                    <li class="dep2" connect="sweatShirt">SWEAT SHIRT</li>
                    <li class="dep2" connect="hoody">HOODY</li>
                    <li class="dep2" connect="knit">KNIT</li>
                    <li class="dep2" connect="cardigan">CARDIGAN</li>
                </ul>
            </li>
            <li class="dep1" connect="bottom">BOTTOM
                <ul class="innerMenu">
                    <li class="dep2" connect="pants">PANTS</li>
                    <li class="dep2" connect="denim">DENIM</li>
                    <li class="dep2" connect="skirt">SKIRT</li>
                </ul>
            </li>
            <li class="dep1" connect="acc">ACC
                <ul class="innerMenu">
                    <li class="dep2" connect="bag">BAG</li>
                    <li class="dep2" connect="shoes">SHOES</li>
                    <li class="dep2" connect="cap">CAP</li>
                    <li class="dep2" connect="belt&wallet">BELT & WALLET  </li>
                </ul>
            </li>
        </ul>
        <div class="userZone">
        <div class="icons">
            <a href="" class="heart icon">
                <span class="material-symbols-outlined">
                    favorite
                </span>
            </a>
            <a href="" class="cart icon">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
            </a>
            <a href="" class="myPage icon">
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </a>
        </div>
    </div>`