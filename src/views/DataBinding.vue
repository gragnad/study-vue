<template>
    <h1>hello, {{title}}!</h1>
    <!-- 이중 중괄호 html 데이터 바인딩-->
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
    <!-- 바인딩 방법 v-html 로-->
    <div>
        <input type="text" v-model="valueModle"/>
    </div>
    <!--양방향 데이터-->
    <div>
        <input type="number" v-model.number="numberModle"/>
    </div>
    <!--양방향 데이터  Number-->
    <div>
        <select v-model="city">
            <option value="02">soul</option>
            <option value="051">busan</option>
            <option value="064">jeju</option>
        </select>
    </div>
    <!-- select v-model-->
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
    <div class="container" 
    v-bind:class="{'active': isActive, 'text-red': hasError }">Class Binding</div>

    <div class="container" 
    v-bind:class="['activeClass', 'errorClass']">Class Binding2</div>

    <div>
        <table>
            <thead>
                <tr>
                    <th>productName</th>
                    <th>price</th>
                    <th>category</th>
                    <th>shippingFee</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<!-- value -> v-model-->
<!-- 속성 -> v-vind-->

<script>
export default {
    data() {
        return{
            title: 'World',
            htmlString: 
            '<p style="color:red;">This is a re String.</p>',
            valueModle: 'South Korea',
            numberModle: 3,
            city: "051",
            imgSrc: "https://kr.vuejs.org/images/logo.png",
            isActive: true,
            hasError: false,
            activeClass: 'active',
            errorClass: 'text-red',
            productList: [
                {"name":"keyBoard", "price":2500,"category":"notebook","delivery_price":5000},
                {"name":"keyBoard", "price":2500,"category":"notebook","delivery_price":5000},
                {"name":"keyBoard", "price":2500,"category":"notebook","delivery_price":5000},
                {"name":"keyBoard", "price":2500,"category":"notebook","delivery_price":5000}
            ],
        };
    },
}
</script>
<style scoped>
    container {
        widows: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color:red;
    }
</style>