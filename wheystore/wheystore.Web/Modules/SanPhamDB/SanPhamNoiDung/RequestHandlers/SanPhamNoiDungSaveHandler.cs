using MyRow = wheystore.SanPhamDB.SanPhamNoiDungRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamNoiDungSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamNoiDungSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamNoiDungSaveHandler
{
}