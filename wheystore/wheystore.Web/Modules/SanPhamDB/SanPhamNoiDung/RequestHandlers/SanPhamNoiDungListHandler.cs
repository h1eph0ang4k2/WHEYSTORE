using MyRow = wheystore.SanPhamDB.SanPhamNoiDungRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamNoiDungListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class SanPhamNoiDungListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ISanPhamNoiDungListHandler
{
}