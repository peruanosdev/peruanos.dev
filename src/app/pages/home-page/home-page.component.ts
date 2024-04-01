import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardCommunityDetailComponent } from "../../components/card-community-detail/card-community-detail.component";
import { dataCommunities } from '../../../../_data/communities';
import { ICommunity } from '../../../../model/community.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [HeaderComponent, FooterComponent, CardCommunityDetailComponent]
})
export class HomePageComponent {
  communityList = dataCommunities;
  citiesList;

  constructor() {
    this.citiesList = this.getListCities(this.communityList);
  }

  getListCities(communities: ICommunity[]) {
    const cities = new Set();
    communities.forEach((item: ICommunity) => {
      cities.add(item.city);
    });
    return Array.from(cities);
  }
}
