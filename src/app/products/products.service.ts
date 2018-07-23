import { Product } from './product.model';
import { EventEmitter } from '@angular/core';

export class ProductService {
    productSelected = new EventEmitter<Product>();
    private  products: Product[] = [
        new Product('Absolue Premium Nuit 兰蔻菁纯卓颜晚霜 (15g)', 246, 'This is for night time use',
        // tslint:disable-next-line:max-line-length
        'https://res.lancome.com.cn/resources/2018/6/5/15281869292466311_920X920.jpg?version=20180705230743340'),
        // tslint:disable-next-line:max-line-length
        new Product('Absolue Premium Cream SPF15 兰蔻菁纯卓颜日霜 SPF15(15g)', 346, 'SPF 15',
         'https://res.lancome.com.cn/resources/2018/5/14/1526270256341804_258X258.jpg'),
        new Product('Absolue Premium Yeux SPF15 兰蔻菁纯卓颜眼霜 (6g)', 154, '特别设计的眼霜，富含卓颜分子',
         'https://res.lancome.com.cn/resources/2018/6/5/15281869363711616_258X258.jpg'),
        new Product('Energie de vie Foam Cleanser SPF15 兰蔻清滢嫩肤洁面乳 (50ml)', 98, '洗面奶',
         'https://res.lancome.com.cn/resources/2018/6/5/15281869363711616_258X258.jpg'),
        new Product('兰蔻水光润面霜 (50ml)', 346, '盈润美肌',
         // tslint:disable-next-line:max-line-length
         'https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dwdd2f1150/Products/edv/3614271304698_EnergieDeVie_DayCream50mL_1000x1000.jpg?sw=750&sh=750&sm=fit'),
         new Product('兰蔻新梦魅旋密睫毛膏 (4ml)', 150, '采用专利睫毛提升刷，使睫毛根部及梢部即刻立体旋密',
         // tslint:disable-next-line:max-line-length
         'https://res.lancome.com.cn/resources/2018/5/15/15263560965182208_920X920.jpg?version=20180716205519121'),

      ];

    getProducts() {
        return this.products.slice();
    }
    addProducts (products: Product) {
        this.products.push(products);
    }
}
