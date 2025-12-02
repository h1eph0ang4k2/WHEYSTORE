using MyRow = wheystore.SanPhamDB.QuanHuyenRow;

namespace wheystore.SanPhamDB;

public interface IQuanHuyenRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class QuanHuyenRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IQuanHuyenRetrieveHandler
{
}