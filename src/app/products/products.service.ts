import { Product } from './product.model';
import { EventEmitter } from '@angular/core';

export class ProductService {
    productSelected = new EventEmitter<Product>();
    private  products: Product[] = [
        new Product('A cream', 2, 'This is for day time use', // tslint:disable-next-line:max-line-length
        'https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodfull/lancome-renergie-lift-multi-action-spf-15-face-cream-d-2016060313511942~203348.jpg'),
        new Product('Absolue Premium Nuit 兰蔻菁纯卓颜晚霜 (15g)', 246, 'This is for night time use',
        // tslint:disable-next-line:max-line-length
        'https://res.lancome.com.cn/resources/2018/6/5/15281869292466311_920X920.jpg?version=20180705230743340'),
        // tslint:disable-next-line:max-line-length
        new Product('Absolue Premium Cream SPF15 兰蔻菁纯卓颜日霜 SPF15(15g)', 350, 'SPF 15',
         'https://res.lancome.com.cn/resources/2018/5/14/1526270256341804_258X258.jpg'),
        new Product('Absolue Premium Cream SPF15 兰蔻菁纯卓颜日霜 SPF15(15g)', 350, 'SPF 15',
         'https://res.lancome.com.cn/resources/2018/6/5/15281869363711616_258X258.jpg')

      ];

    getProducts() {
        return this.products.slice();
    }
    addProducts (products: Product) {
        this.products.push(products);
    }
}
