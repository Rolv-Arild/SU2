package KundeService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Path("/kunder/")
public class KundeService {
	private static Map<String,Kunde> kunder = new HashMap<>();

    @GET
    @Path("/{kundeId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Kunde getKunde(@PathParam("kundeId") String kundeId) {
        if (!kunder.containsKey(kundeId)) throw new NotFoundException("Ikke funnet");
        return kunder.get(kundeId);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Kunde> getKunder() {
        return kunder.values();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addKunde(Kunde kunde) {
        kunder.put(kunde.getId(), kunde);
    }

    @DELETE
    @Path("/{kunder}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteKunde(Kunde kunde) {
        kunder.remove(kunde.getId());
    }

    @PUT
//    @Path("/{kunder}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void endreKunde(Kunde kunde) {
        if (kunder.get(kunde.getId()) != null) {
            kunder.put(kunde.getId(), kunde);
        } else {
            throw new NotFoundException("Ikke funnet");
        }
    }
}