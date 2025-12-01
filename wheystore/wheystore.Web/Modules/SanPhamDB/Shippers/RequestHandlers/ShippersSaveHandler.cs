using MyRow = wheystore.SanPhamDB.ShippersRow;

namespace wheystore.SanPhamDB;

public interface IShippersSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class ShippersSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IShippersSaveHandler
{
}