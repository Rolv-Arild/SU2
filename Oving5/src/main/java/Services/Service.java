package Services;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * @author nilstes
 */
@Path("/thepath/")
public class Service {
    private static String info;

    @GET
    @Path("/{info}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getInfo() {
        return info;
    }

    @PUT
//    @Path("/{info}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void endreInfo(String i) {
        info = i;
    }
}
