import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from "mdbreact";
import GoogleMapReact from "google-map-react";
import { Footer } from '../../components/Admin/Footer';
import { TopNavigation } from '../../components/Admin/TopNavigation';
import { SideNavigation } from '../../components/Admin/SideNavigation';
import '../../assets/AdminAssets/css/Admin.css'

export const MapsPage = () => {
  return (
    <React.Fragment>
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <MDBRow>
            <MDBCol md="6">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header blue darken-2">
                  <h4 className="h4-responsive text-white">Regular map</h4>
                </MDBView>
                <MDBCardBody
                  style={{ width: "100%", height: "300px" }}
                  className="text-center"
                >
                  <GoogleMapReact
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="6">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header blue darken-2">
                  <h4 className="h4-responsive text-white">Hybrid map</h4>
                </MDBView>
                <MDBCardBody
                  style={{ width: "100%", height: "300px" }}
                  className="text-center"
                >
                  <GoogleMapReact
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                    options={{
                      mapTypeId: "hybrid",
                    }}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header blue darken-2">
                  <h4 className="h4-responsive text-white">Satellite map</h4>
                </MDBView>
                <MDBCardBody
                  style={{ width: "100%", height: "300px" }}
                  className="text-center"
                >
                  <GoogleMapReact
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                    options={{
                      mapTypeId: "satellite",
                    }}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="6">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header blue darken-2">
                  <h4 className="h4-responsive text-white">Terrain map</h4>
                </MDBView>
                <MDBCardBody
                  style={{ width: "100%", height: "300px" }}
                  className="text-center"
                >
                  <GoogleMapReact
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                    options={{
                      mapTypeId: "terrain",
                    }}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
