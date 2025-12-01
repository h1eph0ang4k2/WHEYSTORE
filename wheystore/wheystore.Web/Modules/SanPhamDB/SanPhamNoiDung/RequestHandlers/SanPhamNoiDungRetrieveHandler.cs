using MyRow = wheystore.SanPhamDB.SanPhamNoiDungRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamNoiDungRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class SanPhamNoiDungRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ISanPhamNoiDungRetrieveHandler
{
}