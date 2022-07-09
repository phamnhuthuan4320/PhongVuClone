import { Component, OnInit } from '@angular/core';
import { products } from '../../models/products.class';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  prods: products;
  cateName: string[] = ['Best sale', 'Sale off', 'Hot', 'Apple - IPhone/IMac/IPad/IWatch', 'Laptop - Dell,Asus,Giga,MSI...'];
  img: string[][] = [
    [
      'https://lh3.googleusercontent.com/KmC5GJuUzn9TKrmbz6iPEHMUIMVzMoeGTMuuwTwB9rKmxIgakwdx2Yac6oayUKfK9hh1ei1W2AL-otHpEECEsJmn2H6jKVmL=rw-w616',
      'https://lh3.googleusercontent.com/IgD0W4-kP5-hb_6wEvZmZZ0F3CRMJRTSglO4ZI5lffFwhlgNu9SvgaRSaEzhdMSnC-ouATqLYYWYTk0gK4hfb7oaMWEhTHI=rw-w616'
    ],
    [
      'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=rw-w400',
      'https://lh3.googleusercontent.com/Y8Y_q1dMIBq4VaovFtS-eJvQ8oqyVUjIcdxZDKQBKHMBjEP7E2iU6GE10Sjq0AdLPlmTw0NGTBpnq34SlUnkFxCS3X3Nag4=rw-w400',
      'https://lh3.googleusercontent.com/4YXRxEqxqmoY8EPliJtNkbcqQCUe4TPTJyAZ_MIsb8JStdwwf3PInwC0SABKuoZiHJC7dJY6Ex1JqS4bpKo=rw-w400',
      'https://lh3.googleusercontent.com/zEZynY53RYop6V73LyabYKrT_c2ZAOk0yhkHgIKB-6UH-aoqVYlBjGZpQn6Eg-491y6Vf5GrMYL-iy3xsUNY4KSl0bPutOnk=rw-w400'
    ],
    [
      'https://lh3.googleusercontent.com/4n8_Z0fEJl9AK2ZEDK2fjp76yNdALIm2lMbIIfDLcCmZkjqvPMHZxkK9RfvbXb0ofsmhE-EjFrIBrSKbKDuz2anC_wDIjm4=rw-w411',
      'https://lh3.googleusercontent.com/7rrZHO9NcaADyPUpfvqkebpJnKbwEYi4KOeByyn3uJaJNLL3uCAsi4n3X-IbFYfVoTI9Kmtfa0Ma3OM7GhmEhhMrpPrrd-_I=rw-w411',
      'https://lh3.googleusercontent.com/N8kzR2c8ZpLaLAxfghinFCdrGs9UFc6IHhj8VjyVCwxZoEHo-wn6iEyv1uC7WFfqmmsAYZgYQ_tpjUQVav8w8aczz-Gw7dSlTQ=rw-w411'
    ],
    [
      'https://lh3.googleusercontent.com/Gc9z_P0lY-0fDemLmqiYt2U7uD6meaQbcsRj0LG6O6a9keMfQZlvodVv8KKAP6U7UVUPpkzmFUfkmMIJIhultS8NnuutrIm-=rw-w400',
      'https://lh3.googleusercontent.com/p1__OgN1GgjPysBrNkZJRmEZIMwtfRi6qwqVaSPX7wIJmvHI7b2Ol3gTCyR8CBDZ0ybmtfG2XoYWCsMZfKjflxwjKFuX8fhe9A=rw-w400'
    ],
    [
      'https://lh3.googleusercontent.com/fABUZ84xm5V23bJOjmsoRgTpr6izWOtvKUkSFfEQgTtM_gHAFYfFVUbbeCdBM881nqWnMxvXTskoqDBcuVxU1IjAAD6RU3f_vg=rw-w411',
      'https://lh3.googleusercontent.com/FKOaZXf-l_DOJt0oG9J2syRTg4IGBh0Ki2wgbS4sLGclW0SVGLifcaM9A8PyjMy0TjPWD6yjwTGyG7Tbk_xZqpML3r0ehS0M=rw-w411',
      'https://lh3.googleusercontent.com/hE0ioEWNkAM6CTuWWDZZKxLDqUQzjwTwKdBdhlYgiA6YfprwAG-eLGsFGWFw6Bv8emQkdMUyom-2JHnHmnRScruzMx3lm7XAzA=rw-w411'
    ],
    [
      'url("https://lh3.googleusercontent.com/mPghhPTsWOQPHOxrgRsD0ZkPBvj4RgMxXfdCoHYtkGeWq7N2CQspC2Ycx2l00Iw8OAK8IDyoWRU0ByqQl_RSmf1OxAHx5qPg=w1232")',
      'url("https://lh3.googleusercontent.com/PL7ZjGnGaZS9bFLcFOYIjZTRvjQQurLArmFS8Qce2psgwYBPbmMs2aXmaLVTnDFf-2BJZPRzwwQ-QtVSkK0oL5SHIemB_UrB2g=w1232")',
      'url("https://lh3.googleusercontent.com/sdMjFRAq0rU4lBknvaBkOqLrsC3DRDnCBF6qkGBa8GU1UsbghaUPIjCXDxECdJq3kaKhqtVlmFMimlLxH2oFBlYEilbVhzjq=w1232")'
    ]
  ];
  title: string[] = [
    'SPEAKER - HEADPHONE - MIXING',
    'TV - ELECTRICAL - HOUSEHOLD'
  ];
  prods1 = [
    {
      name: 'Mouse', img: 'https://lh3.googleusercontent.com/9VuDtVTE_RvRusFv4YCxFwhZ9XSMbmKqgtHoOy73THsg1uJahr0vp2qOZ2mtR2op0rOUUS1hUtmKPgXwp8jK9AgTiHYgbK9zyg=rw-w300',
    },
    {
      name: 'Headphone', img: 'https://lh3.googleusercontent.com/Qx-6ZJMHhewFSMwjiQwGW0yrUSnLEdH2RXwEEuPwy9LDBWTE_fqMK6xP5W657VdP-14z6k-_xaT5B6vYn3aEpiQrSg13EYuF=rw-w300',
    },
    {
      name: 'Hard disc', img: 'https://lh3.googleusercontent.com/7kvKv3X2XR6qy0QZYE7C7rZY6Jxc4NO1u_aItmr3SmMeklpmXUNOC8Yo0AeZzDA21iMhSVslCeNWLMTaCy3grIRdkz1ahRZe1w=rw-w300',
    },
    {
      name: 'Keyboard', img: 'https://lh3.googleusercontent.com/_PztGsQ17JUgF4j7Br_SzLrlVpDwNnl973gzX9GS6sS660UXN5HLNN0BHfGiFoKf6JSDWdaahaIc65i7iIRivsKfrDKREQB0rA=rw-w300'
    }
  ];
  prods2 = [
    {
      name: 'Smart', img: 'https://lh3.googleusercontent.com/8MJ7W7yEyBe7AEA9XQcC4UlGHpdKz_8i72SBrDkyfGxSdKlHQOzDDu7Sa3q0rTzNZvjtfp7i-ONqFkAIPfGlQYrC3bpOLnTw2Q=rw-w300',
    },
    {
      name: 'Fridge', img: 'https://lh3.googleusercontent.com/6GqcZ-pcTA9XAxtX6iFxB7ZcPpJE3BDaZORO8rtHKDi-DXY50-7ajBNmCHlmRadFxFBq1MwJr-AkaekpJXji5ppC37hiH7aB=rw-w300',
    },
    {
      name: 'Air purifier', img: 'https://lh3.googleusercontent.com/FlxDMl8BAGdFJpm1bXWuIOPQMAgwQfOSzLI2I3fvSH4ikDxacv3IPKxPjbzo6C8K8ZNZKSJuxisWFOuVqCg_JwjlmhvKMKgd=rw-w300',
    },
    {
      name: 'Handheld vacuum cleaner', img: 'https://lh3.googleusercontent.com/z-_03H6weFq6fCC-2YzYU8B5CTZL_zhBBktHi8szVPdD1CUcPJPtXpKdjvvCANCqjCdvm97lOL9HIIJVQBVcTZQIjCSPX-UU=rw-w300'
    }
  ];
  isLoading: boolean = true;
  

  constructor(private _pro: ProductsService) { }

  ngOnInit(): void {
    window.scroll({top: 0, behavior: "smooth"});
    
    this._pro.getProducts().subscribe((data) => {
      this.prods = data;
      
      this.isLoading = false;
    })
  }
}
