using MyRow = wheystore.SanPhamDB.MaGiamGiaRow;

namespace wheystore.SanPhamDB;

public interface IMaGiamGiaRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class MaGiamGiaRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IMaGiamGiaRetrieveHandler
{
}